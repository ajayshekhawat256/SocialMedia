import express from 'express';
const router=express.Router();
import {createPost, deletePost, getPost, getTimeLinePost, likePost, updatePost} from '../Controllers/PostController.js';

router.post('/',createPost);
router.get('/:id',getPost);
router.put('/update/:id',updatePost);
router.delete('/:id',deletePost);
router.put('/:id/like',likePost);
router.get("/:id/timeline",getTimeLinePost);


export default router;