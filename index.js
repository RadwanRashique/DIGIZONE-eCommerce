

const dotenv=require("dotenv")
dotenv.config()

// To connect node.js with data base (library)

const mongoose=require("mongoose")

// pass path   from mongo  
mongoose.connect(process.env.MONGO)

const path = require('path')



const express= require("express")
const app =express()

// app.use(express.static(path.join(__dirname,'public')))

// to clear cache
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  next();
});


//  for user routes
const userRoute=require("./routes/userRoute")
app.use("/",userRoute)


// for admin
const adminRoute=require('./routes/adminRoute')

app.use('/admin',adminRoute)


// to conntect public folder to main page for static view
// here public is folder which contain font image....      
app.use(express.static("public/user"))


//  app.use(express.static("public/admin"))

app.use(express.static(path.join(__dirname,'/public')))

  


app.listen(3000,console.log("server is now running on port 3000"))