const router =require('express').Router();

const {
    getAllProducts,
    getProductById,
    postProductById,
  } = require("../controllers/productController");

  router.get("/", getAllProducts);

  router.get("/:productId", getProductById);
  
  router.post("/create", postProductById);
  
  module.exports = router;

/*const {PrismaClient}=require("@prisma/client")

const {product ,ratings}=new PrismaClient();

router.get('/',)

router.post('/create',async(req,res)=>{
    const {name,description,category,quantity,price,image,variants}=req.body;

    const productExists=await product.findUnique({
        where:{
            name
        },
        select:{
            name:true,
            description:true
        }
    })
    if(productExists){
        res.status(400).json({
            msg:"product already exists"
        })
    }

    const newProduct=await product.create({
        data:{
            name,
            description,
            category,
            quantity,
            price,
            image,
            variants

        }
    });


    res.json(newProduct);
})


router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    const prod=await product.findUnique({
        where:
        {
            id:parseInt(id)
        },
        select:{
            id:true,
            name:true,
            description:true,
            category:true,
            quantity:true,
            price:true,
            image:true,
            variants:true
        }
    });
    res.json(prod);
})





/*create review for a product */
/*router.post('/:product_id/reviews/create',async(req,res)=>{
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
)

/**GET all reviews of :id */
/*router.get("/:product_id/reviews",async (req,res)=>{
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
})

module.exports=router


