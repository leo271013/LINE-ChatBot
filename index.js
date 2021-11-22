import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import cheerio from 'cheerio'

const foodtype = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18]
let random1 = 0
let random2 = 0
let lengths = 0
let drandom = 0

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
      random1 = `#${foodtype[Math.floor(Math.random() * 11)]}`
      lengths = $(`${random1}`).find('li').length
      random2 = `${Math.floor(Math.random() * lengths)}`

      const replies = []
      const drinks = []

      for (let i = 0; i < $('#16').find('li').length; i++) {
        drinks.push($('#16').find('li').eq(i).find('a').text())
      }

      for (let i = 0; i < $('#17').find('li').length; i++) {
        drinks.push($('#17').find('li').eq(i).find('a').text())
      }

      drandom = drinks[Math.floor(Math.random() * drinks.length)]

      replies.push(`早餐吃\n${$(`${random1}`).find('li').eq(random2).find('a').text()}\n配\n${drandom}`)

      event.reply(replies)
    } catch (error) {
      console.log(error)
      event.reply('出錯了')
    }
  } else {
    event.reply('格式錯誤!，請輸入"早"')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('OMG')
})
