import { useEffect, useState } from 'react';
import '../assets/css/Email.css'; // Import custom CSS

const EmailForm = () => {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle file input change
  const handleFileChange = (e) => {
    setAttachments(e.target.files);
  };
  // Handle link generation
  const handleGenerateLink = async () => {
    try {
      const response = await fetch('http://localhost:3000/link/generate'); // Ensure this URL matches your backend
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const generatedLink = await response.text();
      setButtonLink(generatedLink); // Update the state with the generated link
    } catch (error) {
      console.error('Error generating link:', error);
      alert('Failed to generate link. Please try again.');
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('recipients', recipients);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('buttonLink', buttonLink);
    formData.append('buttonText', buttonText);

    for (let i = 0; i < attachments.length; i++) {
      formData.append('attachments', attachments[i]);
    }

    try {
      const response = await fetch('http://localhost:3000/email/send-email', {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      const contentType = response.headers.get('content-type');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = contentType.includes('application/json')
        ? JSON.parse(responseText)
        : { errorMessage: responseText };

      setSuccessMessage(result.successMessage || '');
      setErrorMessage(result.errorMessage || '');
    } catch (error) {
      console.error('Error sending email:', error);
      setSuccessMessage('');
      setErrorMessage('An error occurred while sending the email.');
    }
  };

  // Function to remove the message
  const removeMessage = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  // UseEffect to handle cookie-based success messages
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const successMessageCookie = getCookie('successMessage');
    if (successMessageCookie) {
      setSuccessMessage(successMessageCookie);
      document.cookie = 'successMessage=; Max-Age=0; path=/'; // Remove the cookie
    }
  }, []);

  return (
    <div className="email-container">
      <h1 className="email-title">Email Form</h1>

      {successMessage && (
        <div className="success">
          {successMessage}
          <button
            className="close-btn"
            onClick={removeMessage}
          >
            ×
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="error">
          {errorMessage}
          <button
            className="close-btn"
            onClick={removeMessage}
          >
            ×
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="email-form"
      >
        <div className="form-group">
          <label
            htmlFor="recipients"
            className="form-label"
          >
            Recipients (comma separated):
          </label>
          <input
            type="text"
            id="recipients"
            name="recipients"
            className="form-input"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="subject"
            className="form-label"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="message"
            className="form-label"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label
            htmlFor="buttonLink"
            className="form-label"
          >
            Button Link:
          </label>
          <div className="button-link-container">
            <input
              type="url"
              id="buttonLink"
              name="buttonLink"
              className="form-input"
              value={buttonLink}
              onChange={(e) => setButtonLink(e.target.value)}
            />
            <button
              type="button"
              id="generateLinkButton"
              className="form-button"
              onClick={handleGenerateLink}
            >
              Generate Link
            </button>
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="buttonText"
            className="form-label"
          >
            Button Text:
          </label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            className="form-input"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="attachments"
            className="form-label"
          >
            Attachments:
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            className="form-input"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="form-button"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
