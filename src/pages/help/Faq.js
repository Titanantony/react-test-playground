import React from 'react';
import './FAQ.css'; // Optional: Import a CSS file for styling

function FAQ() {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows returns within 30 days of purchase. Items must be in their original condition."
        },
        {
            question: "How can I track my order?",
            answer: "You can track your order using the tracking number sent to your email after shipment."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping. Please check our shipping policy for details on rates and delivery times."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team via email at support@example.com or by calling 1-800-123-4567."
        }
    ];

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-content">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 className="faq-question">{faq.question}</h3>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
