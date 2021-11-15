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
  if (event.message.type === 'text' && event.message.text === '課程') {
    try {
      const { data } = await axios.get('https://wdaweb.github.io/')
      const $ = cheerio.load(data)
      const replies = []
      for (let i = 0; i < $('#go .col-lg-3.col-md-6').length; i++) {
        replies.push(`課程名稱:\n${$('#go .col-lg-3.col-md-6').eq(i).find('h4').text()}\n報名資訊: \n${$('#go .col-lg-3.col-md-6').eq(3).find('.card-description').text().trim().replace(/\t/g, '')}`)
      }
      event.reply(replies)
    } catch (error) {
      console.log(error)
      event.reply('拍謝 出錯了')
    }
  } else {
    event.reply('你在打什麼挖溝')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('OMG')
})
