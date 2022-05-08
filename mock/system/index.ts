import Mock from 'mockjs'

Mock.mock('/system/info', 'get', (options: any) => {
  const data = Mock.mock({
    'list|20': [
      {
        id: '@id',
        nickname: '@name',
        createTime: '@datetime(yy-MM-dd HH:mm:ss)',
        text: '@cparagraph(5)',
        content () {
          return JSON.stringify({ text: this.text })
        },
        'contentType|0-3': 0,
        headimgurl () {
          return Mock.Random.image(
            '40x40',
            Mock.Random.color(),
            '#FFF',
            'png',
            this.nickname[0]
          )
        }
      }
    ]
  })

  return {
    code: 0,
    data: {
      list: data.list,
      pagination: {}
    }
  }
})
