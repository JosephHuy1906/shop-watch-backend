export default interface IProduct{
    _id: string;
    name: string;
    price: number;
    describe: string;
    avatar: string;
    listImg?: string[];
    categoryId: string;
}