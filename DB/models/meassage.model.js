import { Schema,Types,model } from "mongoose";

const meassageSchema = new Schema({
    user:{type:Types.ObjectId,ref:"user"},
    message:String
})

export const Message = model('Meassage',meassageSchema)