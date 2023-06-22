import mongoose, { Schema } from "mongoose";
import IListImg from "../interfaces/IListImg";


const listImgSchema = new Schema<IListImg>({
    _id: { type: String, required: true },
    uri: { type: String, required: true }
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IListImg>('listimg', listImgSchema)