import { Router } from 'express';
import UserController from '@modules/user/infra/http/controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);
userRouter.get('/:id', userController.find);
userRouter.delete('/:id', userController.delete);
userRouter.get('/', userController.list);


export default userRouter;
