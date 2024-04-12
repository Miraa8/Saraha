import { Schema,Types,model } from "mongoose";

const messageSchema = new Schema({
    user:{type:Types.ObjectId,ref:"user"},
    message:String
})

export const Message = model('Message',messageSchema)