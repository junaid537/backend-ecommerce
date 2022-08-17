const { PrismaClient } = require("@prisma/client");
const { review } = new PrismaClient();


const getReviewsById=async (req,res)=>{
    const id=parseInt(req.params.product_id);
    //console.log( id);
    const reviews= await ratings.findMany({
        where:{
            product_id:id
        },
        select:{
            
            name:true,
            review:true,
            rating:true,
            product_id:true
        }
    })
    res.json(reviews)
}

const postReviewsById=async(req,res)=>{
    const product_id=parseInt(req.params.product_id);
    const {name,review,rating}=req.body;
    //check whether userid is associated with user , shud not be new
    const productExists=await product.findUnique({
        where:{
            id:product_id
        }
    })
    if(!productExists ){
        return res.status(400).json({
            msg:"product dont exist with such product id "
        })
    }
    const newReview =await ratings.create({
        data:{
            name,
            review,
            rating,
            product_id
        }
    })
    res.json(newReview)
}
module.exports = {getReviewsById, postReviewsById };
