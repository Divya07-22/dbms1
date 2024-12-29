import React, { useState } from "react"; // Importing useState
import { useNavigate } from "react-router-dom"; // Importing useNavigate

const StudentDetails = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    usn: "",
    email: "",
    yearOfGraduation: "",
    specialization: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulating API call or submission handling
    setTimeout(() => {
      setSubmitted(false);
      navigate("/details-page"); // Redirect to DetailsPage after submission
    }, 3000); // Reset submission state after 3 seconds
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    background: "#ffffff", // White background for a clean look
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Softer and deeper shadow for a floating effect
    borderRadius: "10px", // Rounded corners
    textAlign: "center", // Center the content inside the container
    fontFamily: "'Roboto', sans-serif", // Modern font family
    animation: "fadeIn 1.5s ease-in-out", // Smooth fade-in animation
  };

  const headerStyle = {
    fontSize: "2.2rem",
    color: "#333", // Darker text for better readability
    marginBottom: "20px",
    fontWeight: "600", // Bold header for emphasis
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Consistent spacing between form elements
  };

  const inputStyle = {
    width: "100%",
    padding: "15px", // Increased padding for a larger click area
    fontSize: "1rem",
    border: "2px solid #ddd", // Slightly darker border for better contrast
    borderRadius: "8px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#f8f8f8", // Light gray background for inputs
    outline: "none", // Remove default outline on focus
  };

  const inputFocusStyle = {
    borderColor: "#4caf50", // Green border on focus for a fresh look
    boxShadow: "0 0 5px rgba(76, 175, 80, 0.3)", // Subtle green shadow on focus
  };

  const buttonStyle = {
    padding: "15px",
    fontSize: "1.2rem",
    color: "#fff",
    background: "#4caf50", // Green background for the button
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  };

  const buttonHoverStyle = {
    background: "#45a049", // Slightly darker green on hover
    transform: "scale(1.05)", // Slight zoom effect on hover
  };

  const successMessageStyle = {
    textAlign: "center",
    color: "#28a745", // Green color for success message
    fontSize: "1.3rem",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Student Details</h2>
      {submitted && <p style={successMessageStyle}>Details submitted successfully!</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="studentName"
          type="text"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <input
          name="usn"
          type="text"
          placeholder="USN"
          value={formData.usn}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <input
          name="yearOfGraduation"
          type="number"
          placeholder="Year of Graduation"
          value={formData.yearOfGraduation}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <input
          name="specialization"
          type="text"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style = { ...inputStyle, ...inputFocusStyle })}
          onBlur={(e) => (e.target.style = inputStyle)}
        />
        <button
          type="submit"
          style={{
            ...buttonStyle,
            ...(submitted ? buttonHoverStyle : {}),
          }}
        >
          Submit
        </button>
      </form>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudentDetails;
