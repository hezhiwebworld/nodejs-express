import mongoose from "mongoose";

// 博文内容的数据结构
export default new mongoose.Schema({
   title : String,
   admin : String,
   origin : String,
   abstract : String,
   time : String,
   content : String,
   sign : String,
   
})