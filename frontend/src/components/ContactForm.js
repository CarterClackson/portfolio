import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });

    setFormSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email.';
    }
    if (!formData.message) {
      errors.message = 'Please enter a message.';
    }
    if (Object.keys(errors).length > 0) {
      // Set formErrors state to display errors beneath each field
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          httpMethod: 'POST',
          body: JSON.stringify({
            reply_to: formData.email,
            subject: 'Portfolio Contact Form Submission',
            text: `Name: ${formData.name}\n Email: ${formData.email}\n Message: ${formData.message}`,
            html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
          }),
          resource: '/send-email',
          path: '/send-email',
          isBase64Encoded: false,
          queryStringParameters: null,
          pathParameters: null,
          headers: {
            'Content-Type': 'application/json',
          },
          requestContext: {
            accountId: '123456789012',
            resourceId: 'abcd1234',
            stage: 'prod',
            requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
            identity: {
              cognitoIdentityPoolId: null,
              accountId: null,
              cognitoIdentityId: null,
              caller: null,
              apiKey: null,
              sourceIp: '127.0.0.1',
              accessKey: null,
              cognitoAuthenticationType: null,
              cognitoAuthenticationProvider: null,
              userArn: null,
              userAgent: 'Custom User Agent String',
              user: null,
            },
            resourcePath: '/send-email',
            httpMethod: 'POST',
            apiId: '1234567890',
          },
          stageVariables: null,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setFormData({ name: '', email: '', message: '' });
        setGeneralError('');
        setFormSuccess('Thank you for your message. I will get back to you as soon as I can.');
      } else {
        console.error('Error:', response.statusText);
        const errorMessage = await response.text();
        setGeneralError(errorMessage);
      }
    } catch (err) {
      console.log('Error:', err);
      setGeneralError('An unexpected error has occurred. Please try again later.');
    }
  };

  return (
    <div>
      {formSuccess && <div className="success"><h4 style={{ textAlign: 'center' }}>{formSuccess}</h4></div>}
      {generalError && <div className="error">{generalError}</div>}
      {!formSuccess && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {formErrors.name && <div className="bg-white-fix"><div className="field-error">{formErrors.name}</div></div>}
          </label>
          <label>
            <span>Email:</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {formErrors.email && <div className="bg-white-fix"><div className="field-error">{formErrors.email}</div></div>}
          </label>
          <label>
            <span>Message:</span>
            <textarea name="message" value={formData.message} onChange={handleChange} />
            {formErrors.message && <div className="bg-white-fix"><div className="field-error">{formErrors.message}</div></div>}
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;