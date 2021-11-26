import flex from '../template/flex.js'

export default async (event) => {
  flex.altText = '蛤'
  flex.contents.body.contents[0].text = '太累惹拔'
  event.reply(flex)
}
