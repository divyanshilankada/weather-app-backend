const MongoClient = require('mongodb').MongoClient;
const cors=require('cors');
const express = require("express");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
const url = 'mongodb+srv://lankadadivyanshi:password321@cluster1.9bovumu.mongodb.net/?retryWrites=true&w=majority';
const databasename = "test"; 

app.get("/",  (req,res) => {

    try{
        MongoClient.connect(url).then( async (client) => {

            let connect = client.db(databasename);
        
            const collection = connect
                .collection("location");
        
            const output = await collection.find().toArray();
    
            res.status(200).json({ 
                status:"Success",
                data:output
            });
    
    
        }).catch((err) => {
            console.log(err.Message);

            res.status(401).json({ 
                status:"Failed",
                message:err.message
            });
        })
    }
    catch(err){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }
   
        
})

app.listen(PORT,()=>{
    console.log("the server is running on",8080);
});




