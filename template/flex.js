export default {
  type: 'flex',
  altText: '123456',
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
              text: '哈密瓜',
              size: 'lg',
              weight: 'bold',
              color: '#FFFFFF',
              style: 'italic'
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
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png'
                    },
                    {
                      type: 'text',
                      text: 'NT.50',
                      weight: 'bold',
                      margin: 'sm',
                      flex: 0,
                      color: '#FFFFFF'
                    }
                  ]
                }
              ]
            },
            {
              type: 'text',
              text: '圖片價格僅供參考',
              wrap: true,
              color: '#ffffff',
              size: 'xxs',
              align: 'center'
            }
          ],
          backgroundColor: '#AA0022'
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
              text: '豆花',
              size: 'lg',
              weight: 'bold',
              color: '#ffffff',
              style: 'italic',
              decoration: 'none'
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
                      type: 'icon',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png'
                    },
                    {
                      type: 'text',
                      text: 'NT.30',
                      weight: 'bold',
                      margin: 'sm',
                      flex: 0,
                      color: '#FFFFFF'
                    }
                  ]
                }
              ]
            },
            {
              type: 'text',
              text: '圖片價格僅供參考',
              wrap: true,
              color: '#ffffff',
              size: 'xxs',
              align: 'center'
            }
          ],
          backgroundColor: '#FFAA55'
        }
      }
    ]
  }
}
