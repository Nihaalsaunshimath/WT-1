import React from "react";
import "./ReportCard.css";

const ReportCard = ({ title, description, date, status }) => {
  return (
    <div className="report-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default ReportCard;
