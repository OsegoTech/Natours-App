const nodeMailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = catchAsync(async (options) => {
  // 1) Create a transporter
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
    
  });
  // define email options
    const mailOptions = {
        from: 'Osego Tech <baba@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:
    };
  // send email with nodemailer
    await transporter.sendMail(mailOptions);
});

module.exports = sendEmail;
