const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'vishalmenon.92@gmail.com',
    pass: PROCESS.ENV.PWD
}
});

const mailOptions = {
from: 'vishalmenon.92@gmail.com',
to: request.body.email,
subject: 'Authentication for Gita Labs',
text: 'Welcome to Gita Labs, ${request.body.username}. You are now an authorized user.'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
}); 