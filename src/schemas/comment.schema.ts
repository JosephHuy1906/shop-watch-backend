import mongoose, { Schema } from "mongoose";
import IComment from "../interfaces/IComment";


const commentSchema = new Schema<IComment>({
    _id: {type: String, required: true},
    content: {type: String, required: true},
    productId: {type: String, required: true, ref: 'product'},
    userId: {type: String, required: true, ref: 'user'}
},{
    _id: false,
    timestamps: true
})

export default mongoose.model<IComment>('comment', commentSchema);