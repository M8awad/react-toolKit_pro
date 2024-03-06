import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import { addUser } from "../redux/user/userSlicer"; // Import addUser action from userSlice

const formStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "0vh",
      
    },
    content: {
      display: "flex",
      alignItems: "center", // Center items vertically
      justifyContent: "center",
      width: "100%",
      maxWidth: "400px", // Limit the width of the form content
      padding: "20px",
      marginTop: "-835px"
    },
    form: {
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginRight: "10px",
    },
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch(); // Get dispatch function from redux

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email })); // Dispatch addUser action with name and email
    
  };

  return (
    <div className="container" style={formStyles.container}>
      <div className="content" style={formStyles.content }>
        <div className="form" style={formStyles.form}>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" style={formStyles.input} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" style={formStyles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-button">
              <button type="submit" style={formStyles.button}>submit</button>
              <button style={formStyles.button}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
