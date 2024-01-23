import axios from 'axios';

const previewEmail = require('preview-email');
const nodemailer = require('nodemailer');

// Config
const mailConfig = {
  // jsonTransport: true,
  host: 'smtp.gmail.com',
  port: 465, // or 587
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER, // your gmail account
    pass: process.env.GMAIL_PASS, // your gmail app password
  },
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

  const template = await getPubFile('/templates/template.html');
  const custHtml = await getPubFile('/templates/contact_response.html');
  const adminHtml = await getPubFile('/templates/contact_admin.html');
  const custTxt = await getPubFile('/templates/contact_response.txt');
  const adminTxt = await getPubFile('/templates/contact_admin.txt');

  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const reference = req.body.reference;
  const message = req.body.message;

  // Format our recipient email address
  const recipEmail = `${name} <${email}>`;

  // Format our customer-bound email from received form data
  let sendHtml = custHtml
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
    let mail;

    mail = {
      from: adminEmail,
      to: recipEmail, // list of receivers
      subject: `${name}, thanks for reaching out!`, // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    };

    if (process.env.NODE_ENV === 'development') {
      previewEmail(mail);
    }

    let info;
    if (process.env.NODE_ENV === 'production') {
      // Send our customer-bound email
      info = await transporter.sendMail(mail);

      if (!info.messageId) {
        res.status(200).json({
          status: 0,
          message:
            'Sorry, we are having some technical difficulties. Please send us an email instead.',
        });
        return;
      }
    }

    sendHtml = template
      .replace('%BODY%', adminHtml)
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%PHONE%', phone)
      .replace('%REFERENCE%', reference)
      .replace('%MESSAGE%', message);

    sendTxt = adminTxt
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%PHONE%', phone)
      .replace('%REFERENCE%', reference)
      .replace('%MESSAGE%', message);

    mail = {
      from: adminEmail,
      to: adminEmail, // list of receivers
      replyTo: recipEmail,
      subject: req.body.subject ? req.body.subject : `New Message From ${name}`, // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    };

    if (process.env.NODE_ENV === 'development') {
      previewEmail(mail).then(console.log).catch(console.error);
    }

    if (process.env.NODE_ENV === 'production') {
      info = await transporter.sendMail(mail);

      if (info.messageId) {
        res.status(200).json({ status: 1 });
      } else {
        res.status(200).json({
          status: 0,
          message:
            'Sorry, we are having some technical difficulties. Please send us an email instead.',
        });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(200).json({
      status: 0,
      message:
        'Sorry, we are having some technical difficulties. Please send us an email instead.',
    });
  }
  return;
}
