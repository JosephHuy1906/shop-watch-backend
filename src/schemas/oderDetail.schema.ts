import mongoose, { Schema } from "mongoose";
import IOderDetail from "../constraints/interfaces/IOderDetail";


const oderDetailSchema = new Schema<IOderDetail>({
    _id: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productId: { type: String, required: true, ref: 'product' },
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IOderDetail>('oderdetail', oderDetailSchema)