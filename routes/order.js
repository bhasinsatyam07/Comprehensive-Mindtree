import express from 'express'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from './verifyToken.js';
import Order from '../models/Order.js'
const router = express.Router();

// CREATE Orders
router.post("/", verifyToken, async(req,res)=>{
    const newOrder = new Order(req.body)
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//update route for Product
router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    
    try{
        const updatedOrder =await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,

        }, {new:true})
            res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err)
    }
    })

// delete user cart

router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json("Order has been deleated")
    }catch(err){
            res.status(500).json(err)
    }
})

// get user Orders

router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
    try{
           const orders = await Order.find({userId: req.params.userId})
           res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err);
    }
})

// get all router for Products
    router.get("/", verifyTokenAndAdmin, async(req,res)=>{
        try{
            const orders =await Order.find()
            res.status(200).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    })

// get monthly income stats 

router.get('/income', verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.setMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))

    try{
        const income = await Order.aggregate([
            {$match: {createdAt : {$gte: previousMonth}}},
            {
                $project:{
                    month :{$month:"$createdAt"},
                    sales:"$amount",
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: "$sales"}

                }
            }
        ]);
        res.status(200).json(income)

    }catch(err){
        res.status(500).json(err);
    }
})

export default router