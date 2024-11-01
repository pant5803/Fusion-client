/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "../styles/Departmentmodule.module.css";

const styles = {
  formContainer: {
    width: "600px", // Increased width to 600px for a more spacious layout
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%", // Full width for input elements
    padding: "14px", // More padding for better spacing and ease of use
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%", // Full width for the textarea
    padding: "14px", // More padding for the textarea
    height: "150px", // Increased height for the textarea to allow more content
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "16px", // Increased padding for a larger, more prominent button
    backgroundColor: "#7b4bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "20px", // Larger font size for the button
  },
  header: {
    textAlign: "left",
    fontSize: "24px", // Increased the font size of the header for better visibility
    fontWeight: "bold",
    marginBottom: "15px",
  },
};

export default function Feedbackform({ branch }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("5");
  const [selectedDepartment, setSelectedDepartment] = useState(""); // New state for selected department

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value); // Update selected department state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Feedback for ${branch}: ${feedback} \nRating: ${rating} \nSelected Department: ${selectedDepartment}`,
    );
    // Handle form submission (API call etc.)
  };

  return (
    <div className={`${classes.flex} ${classes.w_full}`}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Centers horizontally
            height: "auto", // Adjust height based on content
          }}
        >
          <h2> Department Feedback</h2>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="feedback">
            Remark:
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback here..."
              style={styles.textarea}
              id="feedback"
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="rating">
            Rating
            <select
              value={rating}
              onChange={handleRatingChange}
              style={styles.input}
              id="rating"
            >
              <option value="1">Poor</option>
              <option value="2">Good</option>
              <option value="3">Excellent</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="department">
            Select Department
            <select
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              style={styles.input}
              id="department"
            >
              <option value="">Select a department</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="SM">SM</option>
              <option value="BDES">BDES</option>
              <option value="Liberal Arts">Liberal Arts</option>
            </select>
          </label>
        </div>

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

Feedbackform.propTypes = {
  branch: PropTypes.string.isRequired,
};
