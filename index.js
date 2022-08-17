const cors=require("cors")
const express=require('express');
const app=express();

const port=process.env.PORT || 3001;

app.use(express.json())
app.use(cors());

app.use("/api/products",require("./routes/product"))
app.use("/api/review", require("./routes/review"));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
