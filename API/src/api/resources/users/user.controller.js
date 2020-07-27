import User from './user.model';
import userService from './user.service';
export default{
    findAll(req,res){
        User.find().then(emp=>res.json(emp))
        .catch(err=>res.status(500).json(err));
    },
    findOne(req,res){
        const id = req.params.id;
        User.findById(id).then(emp=>{
            if(!emp){
                return res.status(400).json({err:"Invalid ID : emp not found"});
            }
            return res.json(emp);
        })
        .catch(err=>res.status(500).json(err))
    },
    deleteOne(req,res){
        const id = req.params.id;
        User.findByIdAndRemove(id).then(emp=>{
            if(!emp){
                return res.status(400).json({err:"Invalid ID : emp not deleted"});
            }
            return res.json(emp);
        })
        .catch(err=>res.status(500).json(err))
    },
    create(req,res){
        let{name,email,role,amount,password}=req.body;
        if(!name){
            return res.status(400).json({err:"name is required"});
        }
        if(!email){
            return res.status(400).json({err:"salary is required"});
        }
        if(!role){
            return res.status(400).json({err:"no is required"});
        }
        if(!amount){
            return res.status(400).json({err:"role is required"});
        }
        if(!password){
            return res.status(400).json({err:"age is required"});
        }
        User.create({name,email,role,amount,password})
        .then(emp=>res.json(emp))
        .catch(err=>res.status(500).json(err));
    },
    update(req,res){
        const id=req.params.id;
        User.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp => {
            if(!emp){
                return res.status(400).json({err:"emp not updated"});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
            const {error,value} = userService.validationSchema(req.body);
            if(error && error.details){
                return res.status(500).json(error);
            }
            //create user
            await User.create(value)
            .then(item => res.json(item))
            .catch(err => res.status(500).json(err));
        }catch(err){
            console.log(err);
        }
    },
    async login(req,res){
        try{
            const {error,value} = userService.validationLoginSchema(req.body);
            if(error && error.details){
                return res.status(500).json(error);
            }
            const user=await User.findOne({email: value.email});
            if(!user){
                return res.status(400).json({err: 'Invalid Email'});
            }else if(user.password!=value.password){
                return res.status(400).json({err: 'Invalid Password'});
            }else{
                return res.json(user);  
            }
        }catch(err){
            console.log(err);
        }
    },
    delete(req,res){
        const id=req.params.id
        //delete all transactions of that user
        Transaction.deleteMany({'refId':id},function(error,result){
            if(error){
                console.log(error);
                return;        
            }
            else{
                Transaction.deleteMany({'userId':id},function(error,result){
                    if(error){
                        console.log(error);
                        return;
                    }
                    else{
                        console.log("all transaction deleted successfully");
                    }
                })
            }
        })
        //delete user
        User.findByIdAndRemove({'_id':id}).then(data =>{
            if(!data){
                return res.status(400).json({err:"user not found"});
            }
            else{
                return res.json(data);
            }
        })
    }
};