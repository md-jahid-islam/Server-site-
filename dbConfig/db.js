 const mongoose = require('mongoose');
 const dbConfig = () =>{
 mongoose.connect(process.env.DB_CONNECTIONS_STRING)
 .then(() => console.log('DB Connected!'));
 }
 module.exports = dbConfig;

 // zJXj5shZsOKGF2uf
