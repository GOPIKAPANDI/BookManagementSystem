const express = require("express");
const {users}= require("./data/users.json"); //TO HAVE TWO OR MORE ARRAYS IN USERS.JSON

const app = express();
const port = 8081;
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is up and running :-)",
    });
});

/**
 * Route : /users
 * Method : GET
 * Description : Get all users
 * Access : Public
 * Parameters : None 
 */

app.get("/users",(req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    });
});

//for all roots 
app.get("*",(req,res)=>{
    res.status(404).json({
        message: "This root does not exist", 
    });
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
