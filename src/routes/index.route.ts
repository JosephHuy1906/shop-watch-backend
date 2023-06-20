import { Router } from 'express';

import useRouter from './user.route';


const rootRouter = Router();

rootRouter.use('/user', useRouter);
rootRouter.get('/',(req, res) =>{
    res.status(200).json({
        status: 200,
        message: 'Api Shop Watch'
    })
})

export default rootRouter;
