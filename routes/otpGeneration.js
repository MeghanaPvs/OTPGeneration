const express=require('express');
const router = express.Router();
let {otp} = require('../helpers/generateOTP')

router.get('/otp',async (req,res)=>{
    let otpValue = await otp();
    console.log('Inside route',otpValue)
    res.send(otpValue)
});

module.exports = router;
