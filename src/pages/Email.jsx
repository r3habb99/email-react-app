import React, { useState } from 'react';
import '../assets/css/Email.css'; // Import custom CSS

const Email = () => {
  const [buttonLink, setButtonLink] = useState('');

  const handleGenerateLink = () => {
    // Implement logic to generate a link if needed
    alert('Link generated');
  };

  return (
    <div className="email-container">
      <h1 className="email-title">Email Form</h1>
      <form
        // action="/email/send-email"
        action="#"
        method="post"
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

export default Email;
