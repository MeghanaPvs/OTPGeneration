const express=require('express');
async function otp()
{
    var digits= '0123456789abcdefghijklmnopqrstuvwxyz';
    var otplength = 4;
    var otp = '';
    for(let i=1; i<=otplength; i++)
    {
     var val= Math.floor(Math.random()*(digits.length));
     //var val = Math.floor(1000 + Math.random() * 9000);

     //floor used to print nearest int value.
     otp = otp +digits[val];
    }
    console.log('--OTP',otp)
    return otp;
}

module.exports ={
    otp:otp
}