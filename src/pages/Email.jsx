import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import '../assets/css/Email.css'; // Import custom CSS
import axios from 'axios'; // Import Axios

const EmailForm = () => {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [attachments, setAttachments] = useState([]);

  // Function to handle file input change
  const handleFileChange = (e) => {
    setAttachments(e.target.files);
  };

  // Handle link generation
  const handleGenerateLink = async () => {
    try {
      const response = await axios.get('http://localhost:3000/link/generate'); // Ensure this URL matches your backend

      setButtonLink(response.data); // Update the state with the generated link
    } catch (error) {
      console.error('Error generating link:', error);
      toast.error('Failed to generate link. Please try again.');
    }
  };

  const resetForm = () => {
    setRecipients('');
    setSubject('');
    setMessage('');
    setButtonLink('');
    setButtonText('');
    setAttachments([]);
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
      const response = await axios.post(
        'http://localhost:3000/email/send-email',
        formData
      );

      if (response.status !== 200) {
        throw new Error(response.data.errorMessage || 'An error occurred');
      }

      toast.success(
        response.data.successMessage || 'Emails sent successfully!',
        {
          onClose: () => {
            // Delay resetting the form to allow the toast to fully disappear
            setTimeout(() => {
              resetForm();
            }, 2000); // Match the autoClose duration
          },
        }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        error.message || 'An error occurred while sending the email.',
        {
          onClose: () => {
            // Optionally, you can clear the form on error as well
            setTimeout(() => {
              resetForm();
            }, 2000); // Match the autoClose duration
          },
        }
      );
    }
  };

  return (
    <div className="email-container">
      <h1 className="email-title">Email Form</h1>

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

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000} // Duration in milliseconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EmailForm;
