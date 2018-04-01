import  mongoose from "mongoose";
import  contentSchema from "../schema/content";

export default mongoose.model('content' ,contentSchema)



