import mongoose, { Schema } from 'mongoose'
import { nanoid } from 'nanoid'
import IUser from '../interfaces/IUser'

const userSchema = new Schema<IUser>({
    _id: { type: String, required: true },
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, default: null },
    verificationCode: { type: String, default: () => nanoid() },
    passwordResetCode: { type: String, default: null },
    verified: { type: Boolean, default: false },
    isRegistrationForm: { type: Boolean, default: false },
    roleId: {type: String, default: '', ref: 'role'}
}, {
    _id: false,
    timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)