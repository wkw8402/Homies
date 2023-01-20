import axios from 'axios';

const nodemailer = require('nodemailer');

// Config
const mailConfig = {
  host: 'smtp.gmail.com',
  port: 465, // or 587
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER, // your gmail account
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS, // your gmail app password
  },
};

const adminEmail = 'Garrett Ackerman <garrett@meethomies.com>';

// Function for grabbing template files
async function getPubFile(file) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${file}`);
  return res.data;
}

export default async function handler(req, res) {
  sendEmails(req, res);
}

async function sendEmails(req, res) {
  // Create our Nodemailer transport handler
  let transporter = nodemailer.createTransport(mailConfig);

  // Fetch our template files
  const template = await getPubFile('/templates/template.html');
  const custHtml = await getPubFile('/templates/customer.html');
  const adminHtml = await getPubFile('/templates/admin.html');
  const custTxt = await getPubFile('/templates/customer.txt');
  const adminTxt = await getPubFile('/templates/admin.txt');

  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  // Format our recipient email address
  const recipEmail = `${name} <${email}>`;

  // Format our customer-bound email from received form data
  let sendHtml = template
    .replace('%BODY%', custHtml)
    .replace('%NAME%', name)
    .replace('%EMAIL%', email)
    .replace('%PHONE%', phone)
    .replace('%MESSAGE%', message);

  let sendTxt = custTxt
    .replace('%NAME%', name)
    .replace('%EMAIL%', email)
    .replace('%PHONE%', phone)
    .replace('%MESSAGE%', message);

  try {
    // Send our customer-bound email
    let info = await transporter.sendMail({
      from: adminEmail,
      to: recipEmail, // list of receivers
      subject: 'Message Received ✔', // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    });

    if (!info.messageId) {
      res
        .status(200)
        .json({
          status: 0,
          message:
            'Sorry, we are having some technical difficulties. Please send us an email instead.',
        });
      return false;
    }

    sendHtml = template
      .replace('%BODY%', adminHtml)
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%MESSAGE%', message);

    sendTxt = adminTxt
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%MESSAGE%', message);

    info = await transporter.sendMail({
      from: recipEmail,
      to: adminEmail, // list of receivers
      subject: req.body.subject ? req.body.subject : `New Message From ${name}`, // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    });

    if (info.messageId) {
      res.status(200).json({ status: 1 });
    } else {
      res
        .status(200)
        .json({
          status: 0,
          message:
            'Sorry, we are having some technical difficulties. Please send us an email instead.',
        });
    }
  } catch (e) {
    console.log(e);
    res
      .status(200)
      .json({
        status: 0,
        message:
          'Sorry, we are having some technical difficulties. Please send us an email instead.',
      });
  }
}
