/*import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const DisplayPage = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedData);
  }, []);

  return (
    <div className="container mt-4">
      <h2>mobile conformation</h2>
      
      {students.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No student data found. Please fill out the form.</p>
      )}

      {/* Go Back Button */
      /*<button className="btn btn-primary mt-3" onClick={() => navigate("/form")}>
        Go Back
      </button>

     
    </div>
  );
};

export default DisplayPage;*/
import React from "react";

const DisplayPage = () => {
  const products = [
    { id: 1, name: "oppo 5g", price: "$35,000", image: "https://tse4.mm.bing.net/th?id=OIP.ME7w8biTCoGCGAD20L1S6wHaHX&pid=Api&P=0&h=180" },
    { id: 2, name: "redmi 5g", price: "$40,000", image: "https://tse1.mm.bing.net/th?id=OIP.oaVMEWhhLKnrQmCK35JRsAHaHa&pid=Api&P=0&h=180" },
    { id: 3, name: "Smartphone", price: "$50,000", image: "https://tse4.mm.bing.net/th?id=OIP.iMrhNuHwZvMBUzrZjsH7fQHaHa&pid=Api&P=0&h=180" },
  ];

  return (
    <div style={styles.container}>
    

      {/* Hero */}
      <section id="home" style={styles.hero}>
        <h2>Welcome to PropCart</h2>
        <p>Your one-stop online store for everything awesome.</p>
      </section>

      {/* Product Section */}
      <section id="products" style={styles.products}>
        <h2>Featured Products</h2>
        <div style={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <h3>{product.name}</h3>
              <p style={styles.price}>{product.price}</p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: support@myshop.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Location: 123 Market Street, Shopville</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

// CSS Styles as JS Object
const styles = {
  container: {
    fontFamily: "Times new roman",
    margin: 0,
    padding: 0,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  header: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  hero: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#eee",
  },
  products: {
    padding: "40px 20px",
    textAlign: "center",
  },
  productGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "5px",
  },
  price: {
    color: "#2ecc71",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
  },
  about: {
    padding: "40px 20px",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  contact: {
    padding: "40px 20px",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
};

export default DisplayPage;
