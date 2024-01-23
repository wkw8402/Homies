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
  const custHtml = await getPubFile('/templates/roommate_response.html');
  const adminHtml = await getPubFile('/templates/roommate_admin.html');
  const custTxt = await getPubFile('/templates/roommate_response.txt');
  const adminTxt = await getPubFile('/templates/roommate_admin.txt');

  let {
    name,
    email,
    phone,
    roommateName,
    roommateKnow,
    roommateEmail,
    housing,
    housingAddress,
    reference,
    otherDetails,
  } = req.body;

  // Format our recipient email address
  const recipEmail = `${name} <${email}>`;

  // Format our customer-bound email from received form data
  let sendHtml = custHtml
    .replace('%NAME%', name)
    .replace('%EMAIL%', email)
    .replace('%PHONE%', phone)
    .replace('%ROOMMATENAME%', roommateName)
    .replace('%ROOMMATEKNOW%', roommateKnow)
    .replace('%ROOMMATEEMAIL%', roommateEmail || 'N/A')
    .replace('%HOUSING%', housing)
    .replace('%HOUSINGADDRESS%', housingAddress || 'N/A')
    .replace('%REFERENCE%', reference)
    .replace('%MESSAGE%', otherDetails || 'N/A');

  let sendTxt = custTxt
    .replace('%NAME%', name)
    .replace('%EMAIL%', email)
    .replace('%PHONE%', phone)
    .replace('%ROOMMATENAME%', roommateName)
    .replace('%ROOMMATEKNOW%', roommateKnow)
    .replace('%ROOMMATEEMAIL%', roommateEmail || 'N/A')
    .replace('%HOUSING%', housing)
    .replace('%HOUSINGADDRESS%', housingAddress || 'N/A')
    .replace('%REFERENCE%', reference)
    .replace('%MESSAGE%', otherDetails || 'N/A');

  try {
    let mail;

    mail = {
      from: adminEmail,
      to: recipEmail, // list of receivers
      subject: `Welcome to the Homies family!`, // Subject line
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
      .replace('%ROOMMATENAME%', roommateName)
      .replace('%ROOMMATEKNOW%', roommateKnow)
      .replace('%ROOMMATEEMAIL%', roommateEmail || 'N/A')
      .replace('%HOUSING%', housing)
      .replace('%HOUSINGADDRESS%', housingAddress || 'N/A')
      .replace('%REFERENCE%', reference)
      .replace('%MESSAGE%', otherDetails || 'N/A');

    sendTxt = adminTxt
      .replace('%NAME%', name)
      .replace('%EMAIL%', email)
      .replace('%PHONE%', phone)
      .replace('%ROOMMATENAME%', roommateName)
      .replace('%ROOMMATEKNOW%', roommateKnow)
      .replace('%ROOMMATEEMAIL%', roommateEmail || 'N/A')
      .replace('%HOUSING%', housing)
      .replace('%HOUSINGADDRESS%', housingAddress || 'N/A')
      .replace('%REFERENCE%', reference)
      .replace('%MESSAGE%', otherDetails || 'N/A');

    mail = {
      from: adminEmail,
      to: adminEmail, // list of receivers
      subject: req.body.subject ? req.body.subject : `New Message From ${name}`, // Subject line
      text: sendTxt, // plain text body
      html: sendHtml, // html body
    };

    if (process.env.NODE_ENV === 'development') {
      previewEmail(mail);
      res.status(200).json({
        status: 0,
        message: 'Development mode',
      });
      return;
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
