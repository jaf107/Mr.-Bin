const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
      user: "mrbin2022@outlook.com",
      pass: "Mrbin@2022",
    },
  });

  const mailOptions = {
    from: "mrbin2022@outlook.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
