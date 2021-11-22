import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import cheerio from 'cheerio'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text' && event.message.text === '!早') {
    try {
      const { data } = await axios.get('https://iding.tw/stores/87c5d56a/menu')
      const $ = cheerio.load(data)
      const replies = []

      replies.push(`餐點:\n${$('.mt-3').eq(0).find('p').eq(0).text()}`)

      event.reply(replies)
    } catch (error) {
      console.log(error)
      event.reply('出錯了')
    }
  } else {
    event.reply('格式錯誤!!!')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('OMG')
})
