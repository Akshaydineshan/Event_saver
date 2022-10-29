//imort items
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

//db connection
mongoose.connect("mongodb://localhost:27017/eventManageMentDb", { useNewUrlParser: true }).then(() => {
    console.log("db connected")
}).catch(() => {
    console.log("db connection failed")
})



app.use(express.json())
app.use(cors({ origin: "http://localhost:4200" }))


const userRoutes=require('./routes/accounts').router
const mainRoutes=require('./routes/main')

//routes
app.use('/api/account',userRoutes);

app.use('/api/main',mainRoutes)




app.listen(3000, () => {
    console.log("server starts 3000 port number");
})