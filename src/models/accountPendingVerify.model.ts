import IAccountPendingVerify from '../constraints/interfaces/IAccountPendingVerify';
import accountPendingVerifySchema from '../schemas/accountPendingVerify.schema';

export default class AccountPendingVerifyModel {
    public static async getByEmail(
        email: string,
    ): Promise<IAccountPendingVerify | null> {
        const account = await accountPendingVerifySchema.findOne({ email });
        return account;
    }
    public static async create(
        payload: IAccountPendingVerify,
    ): Promise<IAccountPendingVerify> {
        const created = await accountPendingVerifySchema.create(payload);
        return created;
    }
    public static async deleteById(
        _id: string,
    ): Promise<IAccountPendingVerify | null> {
        const deleted = await accountPendingVerifySchema.findByIdAndDelete(_id);
        return deleted;
    }
}
