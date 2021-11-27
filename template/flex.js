export default {
  type: 'flex',
  altText: '有好多好多早餐在這裡',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        size: 'micro',
        hero: {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            uri: 'https://linecorp.com'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            uri: 'https://linecorp.com'
          },
          contents: [
            {
              type: 'text',
              text: '哈密瓜哈密瓜哈密瓜哈密',
              size: 'xl',
              weight: 'bold',
              color: '#FFFFFF',
              style: 'italic',
              wrap: true
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '時價',
                      weight: 'bold',
                      margin: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                      size: 'md'
                    }
                  ]
                }
              ]
            }
          ],
          backgroundColor: '#AA0022',
          margin: 'none'
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '273.7 kcal',
              color: '#aaaaaa',
              size: 'sm',
              weight: 'bold',
              align: 'end',
              wrap: true
            },
            {
              type: 'text',
              text: '資訊僅供參考',
              wrap: true,
              color: '#ffffff',
              size: 'xxs',
              align: 'center'
            }
          ],
          backgroundColor: '#AA0022',
          margin: 'none'
        }
      },
      {
        type: 'bubble',
        size: 'micro',
        hero: {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            uri: 'https://linecorp.com'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            uri: 'https://linecorp.com'
          },
          contents: [
            {
              type: 'text',
              text: '哈密瓜哈',
              size: 'xl',
              weight: 'bold',
              color: '#FFFFFF',
              style: 'italic',
              wrap: true
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '時價',
                      weight: 'bold',
                      margin: 'md',
                      flex: 0,
                      color: '#FFFFFF',
                      size: 'md'
                    }
                  ]
                }
              ]
            }
          ],
          backgroundColor: '#FFAA55',
          margin: 'none'
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '324.2 kcal',
              color: '#aaaaaa',
              size: 'sm',
              weight: 'bold',
              align: 'end',
              wrap: true
            },
            {
              type: 'text',
              text: '資訊僅供參考',
              wrap: true,
              color: '#ffffff',
              size: 'xxs',
              align: 'center'
            }
          ],
          backgroundColor: '#FFAA55',
          margin: 'none'
        }
      }
    ]
  }
}
