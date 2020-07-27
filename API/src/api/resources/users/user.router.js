const express=require('express');
import userController from './user.controller';

export const userRouter=express.Router();

userRouter.post('/signup',userController.signup);
userRouter.post('/login',userController.login);

userRouter.route('/')
.post(userController.create)
.get(userController.findAll);

userRouter.route('/:id')
.get(userController.findOne)
.delete(userController.deleteOne)
.put(userController.update)
.delete(userController.delete);

// router.get('/users',userController.findAll);
// router.post('/users',userController.create);
// router.get('/users/:id',userController.findOne);
// router.delete('/users/:id',userController.deleteOne);
// router.put('/users/:id',userController.update);