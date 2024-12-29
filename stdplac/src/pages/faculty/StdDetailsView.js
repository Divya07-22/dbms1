import React from "react";
import { useLocation } from "react-router-dom";

function StdDetailsView() {
  // Use useLocation hook to access the state passed from the previous page
  const location = useLocation();
  const studentData = location.state?.studentData;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#4A4A4A" }}>Student Details</h1>
        {studentData ? (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ marginBottom: "10px", color: "#4A4A4A" }}>
              Details for {studentData.username}
            </h2>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>
              <strong>USN:</strong> {studentData.usn}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>
              <strong>Username:</strong> {studentData.username}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>Details:</strong> {studentData.details}
            </p>
          </div>
        ) : (
          <p>No student data found.</p>
        )}
      </div>
    </div>
  );
}

export default StdDetailsView;
