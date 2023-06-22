import mongoose, { Schema } from "mongoose";
import IOder from "../interfaces/IOder";


const oderSchema = new Schema<IOder>({
    _id: { type: String, required: true },
    address: {type: String, required: true},
    phone: {type: String, required: true},
    price: {type: Number, require: true},
    userId: {type: String, required: true, ref: 'user'},
    statusId: {type: String, default: '', ref: 'status'},
    oderDetail: [{type: String,required: true, ref: 'oderdetail'}]
},{
    _id: false,
    timestamps: true
})

export default mongoose.model<IOder>('oder', oderSchema);