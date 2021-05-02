import Mock from 'mockjs'
import { addUserReg } from '@/api/shouye'
// 通过extend方法来创建信息的数据
Mock.Random.extend({
  free_mail: function () {
    const arr = ['包邮', '不包邮', '2件包邮']
    return this.pick(arr)
  }
})
Mock.mock('/product', {
  // 默认get请求
  'list|10': [
    {
      'product_id|+1': 1, // 商品id
      product_name: '@cword(4,60)', // 商品名称
      'price|1-10000.2': 1, // 价格，整数部分1~10000，小数保留两位
      free_mail: '@free_mail()', // 包邮形式
      seller: '@cname()', // 卖家的名字
      image: '@image()',
      send_place: '@city(true)' // 发货地址
    }
  ]
})
// 通过Mock.mock函数模拟post请求
Mock.mock('/reg', 'post', async function (option) {
  // 这里的option是请求的相关参数
  console.log(option)
  try {
    var params = JSON.parse(option.body)
  } catch (error) {
    return Mock.mock({
      status: 444,
      message: '请求参数有误'
    })
  }
  try {
    await addUserReg(option)
  } catch (err) {
    console.log(err)
    return Mock.mock({
      status: 404,
      message: '没有找到'
    })
  }
  console.log(params)
  if (typeof params.price !== 'number' || params.price < 0) {
    return Mock.mock({
      status: 448,
      message: '商品价格必须是数字，而且大于0'
    })
  }
  return Mock.mock({
    status: 200,
    message: '添加商品成功'
  })
})
