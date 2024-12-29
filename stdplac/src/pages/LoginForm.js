import React from "react";

// CSS Styles in JS (Inline Style)
const style = {
    /* General Reset */
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        fontFamily: "'Arial', sans-serif",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
    },

    /* Full Screen Background Image */
    carousel: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')", // Add your background image link here
    },

    /* Login Form Container */
    loginContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        width: "100%",
        maxWidth: "400px",
    },

    h1: {
        textAlign: "center",
        color: "#333",
        marginBottom: "20px",
        fontSize: "36px",
    },

    form: {
        display: "flex",
        flexDirection: "column",
    },

    label: {
        fontSize: "18px",
        marginBottom: "8px",
        color: "#333",
    },

    input: {
        padding: "10px",
        margin: "10px 0 20px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s",
    },

    button: {
        backgroundColor: "#0066cc",
        color: "white",
        fontSize: "18px",
        padding: "12px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },

    buttonHover: {
        backgroundColor: "#004d99",
    },

    /* Responsive Design */
    "@media screen and (max-width: 480px)": {
        loginContainer: {
            padding: "20px",
            width: "80%",
        },

        h1: {
            fontSize: "28px",
        },

        label: {
            fontSize: "16px",
        },

        input: {
            fontSize: "14px",
        },

        button: {
            fontSize: "16px",
        },
    },
};

const LoginForm = () => {
    return (
        <div style={style.carousel}>
            {/* Login Form Container */}
            <div style={style.loginContainer}>
                <h1 style={style.h1}>Login</h1>
                <form style={style.form}>
                    <label style={style.label}>
                        Email:
                        <input style={style.input} type="email" name="email" />
                    </label>
                    <label style={style.label}>
                        Password:
                        <input style={style.input} type="password" name="password" />
                    </label>
                    <button style={style.button} type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
