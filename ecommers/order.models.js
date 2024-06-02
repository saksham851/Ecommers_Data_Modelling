import mongoose from 'mongoose'

const orderIteamSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema=mongoose.Schema(
  {
    orderPrice:{
      type:Number,
      required:true,
    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User", 
    },

    //Order item ka under ek schema ayega mentioned above orderIteamSchema...
    orderItems:{
      type:[orderIteamSchema]
    },
    address:{
      type:String,
      required:true,
    },
    status:{
      type:String,
      enum:["Pending","Cancelled","Delivered"],
      default:"Pending",
    }
  },{timestamps:true})

export const Order=mongoose.model('Order',orderSchema);

