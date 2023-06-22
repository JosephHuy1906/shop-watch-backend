import { RoleConstant } from "../constraints/enums/role.enum";
import IAccountPendingVerify from "../constraints/interfaces/IAccountPendingVerify";
import IUser from "../constraints/interfaces/IUser";
import { CustomResponse } from "../constraints/interfaces/custom.interface";
import AccountPendingVerifyModel from "../models/accountPendingVerify.model";
import UserModel from "../models/user.model";
import { generateToken } from "../utils/jwtToken.util";
import { v4 as uuidv4 } from 'uuid';

export default class UserService {
    public static async getById(
        _id: string
    ): Promise<CustomResponse<IUser | null>> {
        try {
            const user = await UserModel.getById(_id);
            return {
                status: 200,
                success: true,
                message: 'Get user successfully',
                data: user
            }
        } catch (error) {
            return {
                status: 404,
                success: false,
                message: 'get user by id failed',
                errors: error
            }
        }
    }
    public static async signupFrom(
        payload: Pick<IAccountPendingVerify, 'email' | 'verificationCode'>
    ): Promise<CustomResponse> {
        try {
            const collectionValidateUser =
                await AccountPendingVerifyModel.getByEmail(payload.email);
            if (!collectionValidateUser)
                return {
                    status: 400,
                    success: false,
                    message: 'EMAIL_NOT_FOUND',
                };
            const _id: string = uuidv4();
            const { accessToken, refreshToken } = generateToken({
                _id,
                email: collectionValidateUser.email,
                role: RoleConstant.USER,
            });
            const dataUser = new UserFilter({
                _id,
                email: collectionValidateUser.email as string,
                name: collectionValidateUser.username as string,
                refreshToken,
                password: collectionValidateUser.password as string,
                isRegistrationForm: true,
            });
            const validation = await ValidatePayload(
                dataUser,
                'BAD_REQUEST',
                true,
            );
            if (validation) return validation;
            await UserModel.create(dataUser);
            const deletedCollectionVerifyEmail =
                await AccountPendingVerifyModel.deleteById(
                    collectionValidateUser._id,
                );
            if (!deletedCollectionVerifyEmail)
                return {
                    status: 500,
                    success: false,
                    message: 'DELETE_ACCOUNT_PENDING_FAILED',
                };
            return {
                status: 201,
                success: true,
                message: 'SIGN_UP_FORM_SUCCESSFULLY',
                data: {
                    accessToken,
                    refreshToken,
                },
            };
        } catch (error) {

        }
    }
}