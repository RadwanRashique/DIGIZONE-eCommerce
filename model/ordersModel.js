const mongoose=require("mongoose")


const orderSchema=new mongoose.Schema({

    user:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    deliveryDetails:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    products:[
        {
            productId:{type:String,
            ref:"products",
        required:true}
        ,
        count:{
            type:Number,
            required:true
        }
    }
    ],
    totalAmount:{
        type:Number
        
    },
    date:{
        type:Date
    },
    status:{
        type:String
    },
    payment_id:{
        type:String
    },
    

    delivery_date:{
        type:Date,
        
    }
    
    


})

    


module.exports=mongoose.model("Orders",orderSchema)