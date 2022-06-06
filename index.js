const express = require("express");
const app = express();
app.use(express.json());

app.listen(process.env.PORT || 8080,()=>{
    console.log("listenport");
})
app.get("/",()=>{
    return res.status(200).send("evaluation")
})