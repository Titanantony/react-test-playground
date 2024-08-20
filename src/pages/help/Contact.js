import React from 'react';
import './Contact.css'; // Optional: Import a CSS file for styling

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                <ul>
                    <li><strong>Email:</strong> support@example.com</li>
                    <li><strong>Phone:</strong> 1-800-123-4567</li>
                    <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
                </ul>
            </div>
            <div className="contact-form">
                <h3>Send us a message</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
