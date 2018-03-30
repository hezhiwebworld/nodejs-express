let express = require('express');
let route = express.Router();
let Cookie = require('cookies')
import  apiCtrl  from '../controller/admin.js'
import  conCtrl  from '../controller/content.js'
// 这里统一返回的数据格式
// 在这里配置/admin 全局的一些东西
// route.use((req, res , next) => {
//     req.cookies = new Cookie(req, res)
//     console.log('实例化一个cookie对象')
//     responseData = {
//         returnCode: 0,
//         returnMessage: ''
//     };
//     next();
// })


// 登录模块
route.post('/login', apiCtrl.login)

route.post('/logout', apiCtrl.logout)

// 内容模块
route.post('/addcon', conCtrl.addCon)

route.post('/deleteCon', conCtrl.deleteCon)

route.get('/list', conCtrl.listCon)
module.exports = route;