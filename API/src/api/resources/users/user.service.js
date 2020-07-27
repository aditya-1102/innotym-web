import Joi from 'joi';
export default{
    validationSchema(body){
        const schema=Joi.object().keys({
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            name:Joi.string().required(),
            role:Joi.string().required(),
            amount:Joi.number().required()
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return {error};
        }
        return {value};
    },
    validationLoginSchema(body){
        const schema=Joi.object().keys({
            email:Joi.string().email().required(),
            password:Joi.string().required(),
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return {error};
        }
        return {value};
    }
}