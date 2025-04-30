const { schema } = require("../models/userSchema");

const registrations = (req , res)=>{
    const {fullname,email,password,avatar}= req.body;
    const user = new schema({
        fullname,
        email,
        password,
        avatar,
    });

    user.save();
    res.status(201).send("Registrations Successfull!")

 }
 module.exports = {registrations};
