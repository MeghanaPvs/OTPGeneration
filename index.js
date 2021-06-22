const express = require('express');
//import routes
const otp_generation = require('./routes/otpGeneration');

const app = express();
app.use(express.json())


//use route
app.use('/',otp_generation);
//Mention port
app.listen(4000, () => {
    console.log('App listening on port 4000');
  });

