export default interface IUser{
    _id: string;
    email: string;
    password?: string;
    fullName: string;
    isRegistrationForm: boolean;
    verificationCode: string;
    passwordResetCode?: string;
    verified: boolean;
    roleId: string;
}