import mongoose  from "mongoose";
import Content from "../dbmodel/Content"


 class ContentComponent {
    constructor() {
        // super()
        // this.addCon = this.addCon.bind(this)
    };
    // 增
    async  addCon(req, res, next) {
        // 现根据id 去数据库中查询有没有
        console.log(req.body.title)
        try {
            const con = await Content.findOne({ title: req.body.title})
            if(con){
                res.json({
                    returnCode: 1,
                    returnMsg : "同名文章已经存在"
                })
            }else{
                const newContent = {
                    title : req.body.title,
                    abstract : req.body.abstract,
                    content : req.body.content
                };
                console.log(newContent)
                await Content.create(newContent);
                res.json({
                    returnCode : 0,
                    returnMsg : "添加成功"
                })
            }
        } catch (error) {
            console.log( error )
        }

    };
    // 改
    async editCon() {
        // 根据id 去数据库查询有没有
        try {
            const con = await Content.findOne({ _id: req.body._id})
            if(con) {
                var data = {
                    title : con.title,
                    abstract : con.abstract,
                    content : con.content,
                    article_id : con._id 
                }
             //  将查询到的文章返回给前端
              res.json({
                  returnCode : 0,
                  returnMsg: data
              })
            }
        } catch (error) {
            console.log( error )
        }
    };
    // 删
    async  deleteCon() {
        try {
           // 根据每篇文章的id来删除文章
           const con = await Content.findOne() 
        } catch (error) {
            
        }
         res.json({
             returnCode: 0,
             returnMsg: '添加信息'
         })
    }
    // 查 -- 关键字搜索
    async serCon() {
        
    }
    // list
    async listCon(req, res, next) {
        console.log( req.query  )
        // 这里需要做后端分页
        const  pageStart = req.query
        // skip() 跳过指定数量的数据
        const conList  = await Content.find().skip(pageStart*5).limit(5);
        if ( conList ) {
           console.log( conList )   
        }
        // const temp = await conList.skip(2);
        // console.log( temp )
        var data = {
            returnCode: 1,
            returnMsg: "返回成功的信息"
        }
        res.json(data)
    }
}

export default new ContentComponent()