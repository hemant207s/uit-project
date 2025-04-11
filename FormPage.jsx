/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    city: "",
  });

  console.log(formData);
  

  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {

    console.log([e.target.name], e.target.value);
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters and spaces";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Enter a valid age (18-100)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.course = "address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const storedData = JSON.parse(localStorage.getItem("students")) || [];
      const updatedData = [...storedData, formData];

      localStorage.setItem("students", JSON.stringify(updatedData));

    
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Student data has been saved successfully.",
      });

      // Clear the form
      setFormData({ name: "", email: "", phone: "", age: "", city: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mt-4">
      <h2>Mobile Registration form</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`form-control ${errors.age ? "is-invalid" : ""}`}
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;*/
import React, { useState } from "react";

const FormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      alert("Login successful!");
      // Proceed with login logic...
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Login</h2>

          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button type="submit" style={styles.button}>
            Login
          </button>

          {submitted && <p style={styles.success}>You are now logged in!</p>}
        </form>
      </div>
    </div>
  );
};

// Styles with background image
const styles = {
  page: {
    height: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    borderRadius: "8px",
    width: "300px",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "0.9em",
    marginBottom: "10px",
  },
  success: {
    color: "#2ecc71",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default FormPage;
