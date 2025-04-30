const express = require('express')
const dbConfig = require('./dbConfig/db')
const router = require('./routes')
const app = express()
app.use(express.json());

require('dotenv').config()
dbConfig()
app.use(router)

app.listen(8000 , ()=> console.log("Server is Running"))
