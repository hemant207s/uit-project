/*import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
const UserList = () => { 
const [users, setUsers] = useState([]); 
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null); 
useEffect(() => { 
// Fetch data from the API 
axios.get('https://jsonplaceholder.typicode.com/users') 
.then(response => { 
setUsers(response.data); 
setLoading(false); 
}) 
.catch(error => { 
setError(error); 
setLoading(false); 
}); 
}, []); 
if (loading) return <p>Loading...</p>; 
if (error) return <p>Error: {error.message}</p>; 
return ( 
<div> 
<h2>User List</h2> 
<ul> 
{users.map(user => ( 
<li key={user.id}>{user.name} ({user.email})</li> 
))} 
</ul> 
</div> 
); 
}; 
export default UserList;*/
// src/Home.jsx

/*import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function Home() {
  const [transactions, setTransactions] = useState([]);

  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="home">
      <h1>Personal Finance Tracker</h1>
      <Balance income={income} expenses={expenses} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Home;*/
import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "APPLE",
      price: "$59.99",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk&traceId=1",
    },
    {
      id: 2,
      name: "OPPO",
      price: "$89.99",
      image: "https://m.media-amazon.com/images/I/51DULxJmcAL._SY679_.jpg",
    },
    {
      id: 3,
      name: "VIVO",
      price: "$99.99",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/66oNEFkRgj-vivo-t3pro-5g-494422884-i-1-1200wx1200h.jpeg",
    },
  ];

  return (
    <div style={styles.container}>
      

      <section style={styles.hero}>
        <h2>Welcome to Mobile Application</h2>
        <p>Best deals on electronics, new modeles, and more!</p>
      </section>

      <section style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 0,
    margin: 0,
    backgroundColor: "#f4f4f4",
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
    fontWeight: "500",
  },
  hero: {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#ddd",
  },
  products: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "5px",
  },
  price: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    padding: "10px",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Home;
