// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import dotenv from "dotenv";
// const app = express();
// dotenv.config();
// const { Schema } = mongoose;
// // import {Schema} from mongoose;
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(bodyParser.raw());
// app.use(express.json());

// const UserSchema = new Schema({
//     name: String,
//     description: String
// })

// const PostSchema = new Schema({
//     name: String,
//     descripiton: String,
// })



// const Usere=new Schema({
//     name:String,
//     desc:String,
// })
// const Userr=new mongoose.model("Userr",Usere)
// const Post = new mongoose.model("Post", PostSchema);
// const User = new mongoose.model("User", UserSchema);

// app.post('/post', async (req, res) => {
//     let newPost = await Post.create({
//         name: req.body.name,
//         descripiton: req.body.descripiton,

//     })
//     res.send(newPost);
// })
// app.delete('/poat/delete/:id', async (req, res) => {
//     let newDelete = await Post.findById(req.params.id);
//     let neww = await Post.findByIdAndDelete(req.params.id);
//     res.send("Deleted")
// })

// app.post('/s', (req, res) => {
//     const { email, password } = req.body;
//     console.log(email, password);
//     res.send(req.body);
// })

// app.post('/create', async (req, res) => {
//     // const{name,descripiton}=req.body;
//     let user = await User.create({
//         name: req.body.name,
//         description: req.body.description,
//     })
//     res.send(user);
// })
// app.delete('/getdata:id', async (req, res) => {
//     let userId = await User.findById(req.params.id);
//     await userId.remove();
//     res.send("Deleted");
// })
// app.listen(process.env.PORT, () => {
//     console.log(`Server connected on ${process.env.PORT}`);
// })

// mongoose.connect(process.env.MONGO_URI, () => {
//     console.log("mongoose connected");
// })