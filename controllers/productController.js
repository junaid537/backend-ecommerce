const { PrismaClient } = require("@prisma/client");
const { product } = new PrismaClient();

const getAllProducts=async (req,res)=>{
    const getAllProducts=await product.findMany({
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
    })
    res.status(200).json(data);
    
}

const getProductById=async(req,res)=>{
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
    res.status(200).json(prod);
}
const postProductById=async (req,res)=>{
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
}

module.exports = { getAllProducts, getProductById, postProductById };
