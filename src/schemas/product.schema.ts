import mongoose, { Schema } from "mongoose";
import IProduct from "../interfaces/IProduct";

const productSchema = new Schema<IProduct>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    describe: { type: String, required: true, maxlength: 100 },
    listImg: [{ type: String, required: true, ref: 'listimg' }],
    categoryId: { type: String, required: true, ref: 'category' }
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IProduct>('product', productSchema);