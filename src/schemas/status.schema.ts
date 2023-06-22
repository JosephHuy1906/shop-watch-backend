import mongoose, { Schema } from "mongoose";
import IStatus from "../constraints/interfaces/IStatus";


const statusSchema = new Schema<IStatus>({
    _id: { type: String, required: true },
    name: { type: String, required: true }
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IStatus>('status', statusSchema);