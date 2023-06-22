import mongoose, { Schema } from "mongoose";
import ICategory from "../constraints/interfaces/ICategory";

const categorySchema = new Schema<ICategory>({
    _id: { type: String, required: true },
    name: { type: String, required: true, maxlength: 30 }
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<ICategory>('category', categorySchema)