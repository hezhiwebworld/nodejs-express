
import mongoose from "mongoose";
import AdminComponent from '../class/adminComponent';
import Admin from "../dbmodel/Admin";



class admin extends AdminComponent {
    constructor() {
        super();
        // this.login = this.login.bind(this)
    };
    async login(req, res, next){
        console.log(req.body)
        // responseData.returnMessage = '退出成功';
        res.json({
            "returnCode" : 0,
            "returnMessage" : "登录成功,管理员"
        })
    };
    async logout(req, res, next){
        res.json({
            "returnCode" : 0,
            "returnMessage" : "退出成功"
        })
    }
};

export default  new admin();