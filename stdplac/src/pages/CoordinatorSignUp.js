
// CoordinatorSignUp

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
        fontSize: "1.5rem",
    },
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "1rem",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.3s, box-shadow 0.3s",
    },
    inputFocus: {
        borderColor: "#4CAF50",
        boxShadow: "0 0 5px rgba(76, 175, 80, 0.5)",
    },
    button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#45a049",
    },
    errorMessage: {
        color: "red",
        textAlign: "center",
        marginBottom: "15px",
    },
};

const CoordinatorSignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [focusedField, setFocusedField] = useState(null); // For handling focus styles
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
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

        if (!validateForm()) {
            return;
        }

        alert("Signup successful!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        navigate("/coordinator/dashboard");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Coordinator Sign Up</h2>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    style={{
                        ...styles.input,
                        ...(focusedField === "name" ? styles.inputFocus : {}),
                    }}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    style={{
                        ...styles.input,
                        ...(focusedField === "email" ? styles.inputFocus : {}),
                    }}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    style={{
                        ...styles.input,
                        ...(focusedField === "password" ? styles.inputFocus : {}),
                    }}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    style={{
                        ...styles.input,
                        ...(focusedField === "confirmPassword" ? styles.inputFocus : {}),
                    }}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField(null)}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.password ||
                        !formData.confirmPassword ||
                        formData.password !== formData.confirmPassword
                    }
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default CoordinatorSignUp;
