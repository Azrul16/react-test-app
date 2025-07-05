// src/App.js
import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Fresh Apples',
      price: '$2.99/kg',
      image: 'https://via.placeholder.com/150?text=Apples',
    },
    {
      id: 2,
      name: 'Whole Milk',
      price: '$1.49/L',
      image: 'https://via.placeholder.com/150?text=Milk',
    },
    {
      id: 3,
      name: 'Brown Bread',
      price: '$1.99',
      image: 'https://via.placeholder.com/150?text=Bread',
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>SuperShop</h1>
        <p style={styles.tagline}>Your one-stop grocery store</p>
      </header>

      <section style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.name}>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 SuperShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '2rem 1rem',
  },
  logo: {
    margin: 0,
    fontSize: '2.5rem',
  },
  tagline: {
    marginTop: '0.5rem',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1000px',
    margin: 'auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '1rem',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  name: {
    margin: '1rem 0 0.5rem',
    color: '#333',
  },
  price: {
    color: '#555',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f1f1f1',
    color: '#666',
    marginTop: '2rem',
  },
};

export default App;
