import http from '../require/require'
// const base = 'http://localhost:3000/admin/api/'

// 获取首页数据
export const getIndexVal = () => {
  return http({
    url:'getIndexPage',
    method: 'get'
  })
}

// 获取热销商品
export function getHotShop(data) {
  return http({
    url:'getHotShop',
    method: 'post',
    data
  })
}

// 获取商品列表
export function getAllShop() {
  return http({
    url:'getAllShop',
    method: 'get'
  })
}

// 获取全部分类
export function getAllClassify() {
  return http({
    url:'getAllClassify',
    method: 'get'
  })
}

// 获取全部小料
export function AllExtra() {
  return http({
    url:'getExtra',
    method: 'get'
  })
}

// 保存订单 saveOrder
export function saveOrder(data) {
  // console.log(data.orderItem)
  return http({
    url:'saveOrder',
    method: 'post',
    data
  })
}

// 获取所有订单
export function getUserOrder(data) {
  return http({
    url:'getUserOrder',
    method: 'post',
    data
  })
}