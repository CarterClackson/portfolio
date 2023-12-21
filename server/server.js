const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, text, html } = req.body;

  const msg = {
    to,
    from: 'hello@carterclackson.ca',
    subject,
    text,
    html,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});