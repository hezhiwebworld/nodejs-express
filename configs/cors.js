const corsConfig  = (req, res, next) => {
    // 消除中文乱码
    res.set('Content-type', 'application/json;charset=utf-8')
    // 设置跨域代码
    res.header('Access-Control-Allow-Origin', '*')
    // 设置请求头的类型
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type');
    // 设置永许的的请求方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // 中间件next（）   请求会被挂起
    next()

}
module.exports = corsConfig;

