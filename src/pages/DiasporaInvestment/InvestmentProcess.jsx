import React from "react";
import "./InvestmentProcess.css";

const InvestmentProcess = () => {
  const processSteps = [
    {
      number: "1.",
      title: "Reach Out",
      description:
        "Submit an inquiry via chat, email, WhatsApp, or call — tell us your investment goals.",
    },
    {
      number: "2.",
      title: "Explore Options",
      description:
        "We send a tailored investment catalog and interactive maps showing available properties.",
    },
    {
      number: "3.",
      title: "Choose & View",
      description:
        "Select your property, get subdivision maps, and join live virtual or on-ground tours.",
    },
    {
      number: "4.",
      title: "Book & Confirm Ownership",
      description:
        "We confirm availability and help you complete due diligence (title checks, etc.).",
    },
    {
      number: "5.",
      title: "Secure Your Plot",
      description:
        "Flexible payments: full, installments, or loan plans. We issue receipts and booking letters.",
    },
    {
      number: "6.",
      title: "Finalize & Own",
      description:
        "We prepare legal documents, handle transfer, registration, and deliver your title deed securely.",
    },
  ];

  return (
    <section className="investment-section">
      {/* Title ABOVE card */}
      <div className="investment-header">
        <h2>How It Works: Simple 6-Step Process</h2>
      </div>

      {/* Card with tilted layers */}
      <div className="investment-card-container">
        <div className="investment-bg-back"></div>
        <div className="investment-bg-front"></div>

        <div className="investment-content rounded-3xl shadow-lg">
          {processSteps.map((step, index) => (
            <div key={index} className="investment-step">
              <h3>{step.number} {step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;

