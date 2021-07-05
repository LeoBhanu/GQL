const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
app = express();
const mongoose = require("mongoose")
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001
const dbURI = "mongodb+srv://bhAnu:bhAnu@cluster0.bzjav.mongodb.net/Graphql-demo-DB?retryWrites=true&w=majority"

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')

app.use('/users',userRoutes)
app.use('/posts',postRoutes)

mongoose.connect(dbURI,{ useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true}
    ).then(()=>{
        app.listen(PORT, ()=>console.log(`running at ${PORT}`))
    }).catch(err => {
        console.log(err);
    })