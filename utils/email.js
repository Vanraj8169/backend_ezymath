const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transport
  var transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'b979c073af470c',
      pass: '5cc39e56fe1eaa',
    },
  });

  // 2) Define email options
  const mailOptions = {
    from: 'Vanraj Pardeshi <truecapturers@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  };

  // 3) Send mail
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
