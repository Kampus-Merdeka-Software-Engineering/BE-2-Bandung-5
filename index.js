const express = require('express')
require(dotenv).config()
const sequelize = require("./config/config.js")
const app = express();



const port = process.env.PORT || 4000


// addData()
// app.use(cors())

//middleware
app.use(express.json())
// app.disable('view cache');

//router 
app.get("/", (req,res)=>{
    res.send( 'hw' );
})

sequelize.sync()
app.listen(port, ()=>{
    console.log('server started');
})