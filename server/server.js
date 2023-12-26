const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
const awsServerlessExpress = require('aws-serverless-express');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());

// Middleware to handle OPTIONS requests and set CORS headers
app.use((req, res, next) => {
  if (req.method === 'OPTIONS' && req.url === '/send-email') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token');
    res.send();
  } else {
    next();
  }
});


// POST route for sending emails
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

// Generic route to handle all POST requests
app.post('/*', (req, res) => {
  res.status(200).json({ success: false, message: 'Invalid POST request' });
});

const serverProxy = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(serverProxy, event, context);
};