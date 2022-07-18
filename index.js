const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'davidbradforduko@outlook.com',
        pass: 'Suduko@1234'
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

