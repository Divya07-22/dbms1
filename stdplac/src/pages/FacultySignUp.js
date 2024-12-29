import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

const FacultySignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState(""); // To handle error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Reset error on input change
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required.");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        if (!validateForm()) {
            return;
        }

        // Simulating successful sign-up alert
        alert("Signup successful!");

        // Reset form fields
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });

        // Navigate to the dashboard
        navigate("faculty/dashboard2"); // Correct path
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Faculty Sign Up</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Displaying error message */}
            <form onSubmit={handleSubmit}>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Name" 
                    onChange={handleChange} 
                    value={formData.name}
                    style={inputStyle} 
                />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    value={formData.email}
                    style={inputStyle} 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    value={formData.password}
                    style={inputStyle} 
                />
                <input 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={handleChange} 
                    value={formData.confirmPassword}
                    style={inputStyle} 
                />
                <button 
                    type="submit" 
                    style={buttonStyle}
                    disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default FacultySignUp;
