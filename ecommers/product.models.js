import mongoose from 'mongoose'

const productSchema=mongoose.Schema(
  {
    name:{
     type:String,
     required:true,
    },
    description:{
      type:String,
      required:true,
    },
    productImage:{
      type:String,
    },
    price:{
      type:Number,
      default:0,
    },
    stock:{
      type:Number,
      default:0,
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Category',
      required:true,
    },
    ownerShip:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    }


  }
,{timestamps:true})

export const Product=mongoose.model('Product',productSchema);