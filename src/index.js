import dotenv from 'dotenv';

import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({ path: './env' });
connectDB()
.then(()=>{
    app.listen(process.env.port ||7000 , () =>{
        console.log(`server is ruining at port : ${process.env.port} `);

    })
}

)
.catch( (err)=>{
console.log('MONGO db connection falied',err)
})