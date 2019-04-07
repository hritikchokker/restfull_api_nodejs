const connection=require('../connection');
const Schema=connection.Schema;
//const r=new schema({});
const userSchema=new Schema({
    'userid':{
        type:String,
        required:true,
        unique:true
    },
    'password':{
        type:String,
        required:true,
        default:'ABCD'
    },
    'name':{
        type:String,
        required:true,
    },
    'age':{
        type:Number,
        require:true,
    }
});
const UserModel = connection.model('users', userSchema);

module.exports=UserModel;