import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const backend_link = process.env.BACKEND_LINK;

function Form() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", { name, salary });

    const formData = { name, salary };

    try {
      const response = await axios.post(backend_link, formData);
      console.log("Data submitted successfully  ");
      console.log("Data as Response : ", response.data);

      navigate("/home", { state: { salary } });
    } catch (error) {
      console.error("Error submitting data ", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>logIn Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Salary:</label>
            <input
              type="text"
              placeholder="Enter your salary"
              value={salary}
              onChange={handleSalaryChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  formWrapper: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Form;
