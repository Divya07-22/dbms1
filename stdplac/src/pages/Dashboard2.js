
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyDashboard() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const queryOutputs = {
    "Query 1": "Output for Query 1: List of students placed in 2024.",
    "Query 2": "Output for Query 2: Number of internships completed per student.",
    "Query 3": "Output for Query 3: Total number of recruiters visited.",
    "Query 4": "Output for Query 4: Students eligible for placement drives.",
    "Query 5": "Output for Query 5: Placement success rate by department.",
    "Query 6": "Output for Query 6: Number of students in different skill categories.",
    "Query 7": "Output for Query 7: Top 5 companies offering the highest packages.",
    "Query 8": "Output for Query 8: Details of students with pending documents.",
    "Query 9": "Output for Query 9: List of students in training programs.",
    "Query 10": "Output for Query 10: Overview of placement trends over the years.",
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "pink",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "600px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Faculty Dashboard</h1>

        {/* Buttons */}
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => navigate("/faculty/stddetails")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Student Details
          </button>
        </div>

        {/* Dropdown */}
        <div style={{ marginBottom: "30px" }}>
          <label
            htmlFor="dropdown"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#4A4A4A",
            }}
          >
            Select an Option:
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              outline: "none",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
            }}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            {Object.keys(queryOutputs).map((query, index) => (
              <option key={index} value={query}>
                {query}
              </option>
            ))}
          </select>
        </div>

        {/* Output Box */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedOption ? (
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              <strong>{selectedOption}:</strong> {queryOutputs[selectedOption]}
            </p>
          ) : (
            <p
              style={{
                fontSize: "14px",
                color: "#aaa",
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              Select an option from the dropdown to see the output.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
