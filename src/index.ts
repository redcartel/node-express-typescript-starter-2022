import dotenv from 'dotenv';
dotenv.config();
import config from './config';
import app from './app';

app.listen(config.port, ()=>{
    console.log(`🚀`)
    console.log(`listening on ${config.port} with NODE_ENV=${config.nodeEnv}`);
})