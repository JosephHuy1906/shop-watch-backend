import IUser from "../constraints/interfaces/IUser";
import userSchema from "../schemas/user.schema";


export default class UserModel {
    public static async create(
        payload: Omit<IUser, 'createdAt' | 'updatedAt'>
    ): Promise<IUser> {
        const created = await userSchema.create(payload);
        return created;
    }
    public static async updateById(
        _id: string,
        payload: Partial<Omit<IUser, '_id'>>
    ): Promise<IUser | null> {
        const updated = await userSchema.findByIdAndUpdate(_id, payload);
        return updated;
    }
    public static async getById(_id: string): Promise<IUser | null> {
        const user = await userSchema.findById(_id);
        return user;
    }
    public static async getByEmail(email: string): Promise<IUser | null> {
        const user = await userSchema.findOne({ email });
        return user;
    }
}