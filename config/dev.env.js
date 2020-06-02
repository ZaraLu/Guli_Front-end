'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 后端接口地址
  // BASE_API: '"http://localhost:9001"',
  BASE_API: '"http://localhost:8001"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',

  // OSS地址
  OSS_PATH: '"https://guli-edu-file27.oss-cn-qingdao.aliyuncs.com"'
})
