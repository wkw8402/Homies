import axios from 'axios';

const previewEmail = require('preview-email');
const nodemailer = require('nodemailer');

// Config
const mailConfig = {
  jsonTransport: true,
  // host: 'smtp.gmail.com',
  // port: 465, // or 587
  // secure: true, // true for 465, false for other ports
  // auth: {
  //   user: process.env.GMAIL_USER, // your gmail account
  //   pass: process.env.GMAIL_PASS, // your gmail app password
  // },
};

const adminEmail = 'Homies <hello@meethomies.com>';

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
  const customerTemplate = await getPubFile('/templates/contact.html');

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

  let templateHtml = customerTemplate.replace('%NAME%', name);

  try {
    const mail = {
      from: adminEmail,
      to: recipEmail, // list of receivers
      subject: `${name}, thanks for your request`, // Subject line
      text: sendTxt, // plain text body
      html: templateHtml, // html body
    };

    previewEmail(mail).then(console.log).catch(console.error);

    return;

    // Send our customer-bound email
    let info = await transporter
      .sendMail(mail)
      .then(console.log)
      .catch(console.error);

    if (!info.messageId) {
      console.log('failed');
      res.status(200).json({
        status: 0,
        message:
          'Sorry, we are having some technical difficulties. Please send us an email instead.',
      });
      return;
    }

    sendHtml = template
      .replace('%BODY%', adminHtml)
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%PHONE%', phone)
      .replace('%MESSAGE%', message);

    sendTxt = adminTxt
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%PHONE%', phone)
      .replace('%MESSAGE%', message);

    info = await transporter.sendMail({
      from: adminEmail,
      to: adminEmail, // list of receivers
      subject: req.body.subject ? req.body.subject : `New Message From ${name}`, // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    });

    if (info.messageId) {
      console.log('success');
      res.status(200).json({ status: 1 });
    } else {
      console.log('failed');

      res.status(200).json({
        status: 0,
        message:
          'Sorry, we are having some technical difficulties. Please send us an email instead.',
      });
    }
  } catch (e) {
    console.log(e);
    res.status(200).json({
      status: 0,
      message:
        'Sorry, we are having some technical difficulties. Please send us an email instead.',
    });
  }
  console.log('hit');
  return;
}
