const mongoose=require('mongoose');
const schema=mongoose.Schema;


const userSchema= new schema({
   
    email:{type:String,required:true,trim:true},
    name:{type:String,required:true,trim:true},

    password:{type:String,required:true,trim:true},
    likes:{type:Array,required:true,trim:true}

    


});

const User= mongoose.model('Users',userSchema);

module.exports=User;