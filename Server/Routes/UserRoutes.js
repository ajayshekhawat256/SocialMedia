import express from 'express';
const router = express.Router();
import { deleteUser, followUser, getAllUsers, getUser, UnfollowUser, updateUser } from '../Controllers/UserController.js'

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unFollow', UnfollowUser);
router.get('/', getAllUsers);

export default router;
