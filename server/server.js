const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { reply_to, subject, text, html } = req.body;

  const msg = {
    to: 'hello@carterclackson.ca',
    from: 'hello@carterclackson.ca',
    subject,
    text,
    html,
    reply_to,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'There was a problem submitting this form. Feel free to send your inquiry to <a href="mailto:hello@carterclackson.ca">hello@carterclackson.ca</a> or try submitting the form again later.' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});