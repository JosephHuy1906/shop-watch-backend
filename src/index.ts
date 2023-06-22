require('dotenv').config()
import express from 'express'
import config from 'config'
import connectDD from './utils/connectDB.util';
import router from './routes';

const app = express()
const port = config.get('port');

app.use('/api',router)

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
    
    connectDD()
})