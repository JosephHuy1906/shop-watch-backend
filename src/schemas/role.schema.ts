import mongoose, { Schema } from "mongoose";
import IRole from "../constraints/interfaces/IRole";


const roleSchema = new Schema<IRole>({
    _id: { type: String, required: true },
    name: { type: String, required: true }
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IRole>('role', roleSchema);