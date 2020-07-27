import Transaction from '../transactions/transaction.model';
import transactionService from '../transactions/transaction.service';
import { date } from 'joi';

export default{
    findAll(req,res){
        Transaction.find().then(emp=>res.json(emp))
        .catch(err=>res.status(500).json(err));
    },
    async create(req,res){
        try{
            const {error,value} = transactionService.validationSchema(req.body);
            if(error && error.details){
                return res.status(500).json(error);
            }
            //create user
            await Transaction.create(value)
            .then(item => res.json(item))
            .catch(err => res.status(500).json(err));
        }catch(err){
            console.log(err);
        }
    },
    findMyTransaction(req,res,next){
        let {id}=req.params;
        const {page=1,perPage=10}=req.query;
        const options={
            page:parseInt(page,10),
            limit:parseInt(perPage,10),
            populate:'userId refId'
        }
        Transaction.paginate({'userId':id},options).then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    }
}       