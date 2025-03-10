const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes") 
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes") 

require("dotenv").config()
require("./config/db")
const PORT = process.env.PORT || 5555;
const app = express()

app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)


app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
  });