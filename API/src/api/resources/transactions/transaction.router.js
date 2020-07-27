const express=require('express');
import transactionController from '../transactions/transaction.controller';

export const transactionRouter=express.Router();

transactionRouter.route('/')
.get(transactionController.findAll)
.post(transactionController.create);

transactionRouter.route('/myTransactions/:id').get(transactionController.findMyTransaction);