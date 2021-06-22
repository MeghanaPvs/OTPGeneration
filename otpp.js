const express = require('express');
const app=express();
app.get('/',(req,res)=>{
res.send('hi');
function otp()
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
    
        return otp;
    
    }
    console.log(otp());
});

app.listen(3000,()=>console.log('listening on 3000'));