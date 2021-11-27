import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import cheerio from 'cheerio'
import flex from './template/flex.js'
import menu from './menu/menu.js'

const foodtype = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18]
let random1 = 0
let randoma = 0
let random2 = 0
let lengths = 0
let drandom = 0
let fprice = 0
let dprice = 0
let foodurl = 'product.php?act=view&id=12'
let drinkurl = 'product.php?act=view&id=12'
const bot = linebot({

  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text' && event.message.text === '早') {
    try {
      const { data } = await axios.get('https://www.macc.com.tw/product.php')
      const $ = cheerio.load(data)
      randoma = Math.floor(Math.random() * 11)
      random1 = `#${foodtype[randoma]}`
      lengths = $(`${random1}`).find('li').length
      random2 = `${Math.floor(Math.random() * lengths)}`
      foodurl = $(random1).find('li').eq(random2).find('a').attr('href')
      const { data: foodinfo } = await axios.get(`https://www.macc.com.tw/${foodurl}`)
      const $$ = cheerio.load(foodinfo)

      const drinks = []
      const drinksimg = []

      for (let i = 0; i < $('#16').find('li').length; i++) {
        drinks.push($('#16').find('li').eq(i).find('a').text())
        drinksimg.push($('#16').find('li').eq(i).find('a').attr('href'))
      }

      for (let i = 0; i < $('#17').find('li').length; i++) {
        drinks.push($('#17').find('li').eq(i).find('a').text())
        drinksimg.push($('#17').find('li').eq(i).find('a').attr('href'))
      }

      drandom = Math.floor(Math.random() * drinks.length)
      drinkurl = drinksimg[drandom]

      const { data: drinkinfo } = await axios.get(`https://www.macc.com.tw/${drinkurl}`)
      const $$$ = cheerio.load(drinkinfo)

      for (const [key, value] of Object.entries(menu)) {
        if ($(`${random1}`).find('li').eq(random2).find('a').text() === key) {
          fprice = `$${value}`
        } else if (drinks[drandom] === key) {
          dprice = `$${value}`
        }
      }

      flex.contents.contents[0].body.contents[0].text = $(`${random1}`).find('li').eq(random2).find('a').text()
      flex.contents.contents[0].hero.url = `https://www.macc.com.tw/${$$('img').eq(0).attr('src')}`
      flex.contents.contents[0].body.contents[1].contents[0].contents[0].text = `${fprice}`
      flex.contents.contents[0].footer.contents[0].text = `${$$('.brief').text()}`
      flex.contents.contents[1].body.contents[0].text = drinks[drandom]
      flex.contents.contents[1].hero.url = `https://www.macc.com.tw/${$$$('img').eq(0).attr('src')}`
      flex.contents.contents[1].footer.contents[0].text = `${$$$('.brief').text()}`
      flex.contents.contents[1].body.contents[1].contents[0].contents[0].text = `${dprice}`

      console.log('done')
      event.reply(flex)
    } catch (error) {
      console.log(error)
      event.reply('阿嘞，出了一點小問題')
    }
  } else {
    event.reply('格式錯誤!，請輸入"早"')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('OMG')
})
