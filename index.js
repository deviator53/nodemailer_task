const nodemailer = require('nodemailer');
require('dotenv').config();

 
 
let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'davidbradforduko@outlook.com',
        pass: process.env.PASS
    }
});
 
let mailDetails = {
    from: 'davidbradforduko@outlook.com',
    to: 'bradforddavid083@gmail.com',
    subject: 'Test mail',
    text: 'This is a zuri NodeJs task'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('An error occured');
    } else {
        console.log('Email sent successfully ' + data.response);
    }
});

