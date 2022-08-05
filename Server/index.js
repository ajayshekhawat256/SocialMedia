import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import AuthRoute from './Routes/AuthRoute.js';
import UserRoutes from './Routes/UserRoutes.js';
import postRoutes from './Routes/postRoutes.js';
import UploadRoutes from './Routes/UploadRoutes.js';
import chatRoutes from './Routes/chatRoutes.js';
import MessageRoutes from './Routes/MessageRoutes.js';
const app = express();
app.use(cors());

//to serve images
app.use(express.static('public'))
app.use('/images', express.static('images'));

app.use(express.json());

dotenv.config();

// app.use('/',(req,res)=>{
//     res.send(req.body);
// })
app.listen(process.env.PORT, () => {
    console.log("Server Connnected");
})
mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Mongo connected");
})

//usage Routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoutes);
app.use('/post', postRoutes);
app.use('/upload', UploadRoutes);
app.use('/chat', chatRoutes);
app.use('/message', MessageRoutes);