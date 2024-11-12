import  { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  // State to manage form inputs
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newProduct = {
      name: productName,
      price: productPrice,
      expiryDate: expiryDate
    };

    try {
      // Send a POST request to add the product to the products collection
      const response = await axios.post('http://localhost:3000/add-product/product', newProduct);
      setMessage('Product added successfully!');
      
      // Clear the form fields
      setProductName('');
      setProductPrice('');
      setExpiryDate('');
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-info">Add New Product</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
          <input
            type="date"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
