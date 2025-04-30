const express = require('express');
const { registrations } = require('../../controllers/authcontrollers');
const router = express.Router();

router.post("/Registrations" , registrations)


module.exports = router;