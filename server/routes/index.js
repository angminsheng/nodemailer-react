const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your email address',
    pass: 'your email password'
  }
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/send-email', (req, res, next) => {
  console.log('aaaaaaaaaa', req.body)
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: email,
    subject: subject,
    text: message,
    html: `<b>${message}</b>`
  })
    .then(info => res.json({ msg: "done" }))
    .catch(error => console.log(error));
});



module.exports = router;
