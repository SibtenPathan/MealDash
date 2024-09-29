import React, { useEffect, useState } from 'react';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';
import axios from 'axios';
import Modal from './Modal';

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // Track product being edited

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/menu');
      setProducts(response.data);
    } catch (err) {
      setError('Error fetching products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle adding a new product
  const handleAddProduct = async (newProduct) => {
    try {
      await axios.post('http://localhost:5000/api/menu', newProduct);
      fetchProducts();
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Error adding product');
    }
  };

  const handleEditProduct = async (updatedProduct) => {
    try {
        await axios.put(`http://localhost:5000/api/menu/${currentProduct._id}`, updatedProduct);
        fetchProducts();
        setIsModalOpen(false);
        setCurrentProduct(null); // Reset the current product after editing
    } catch (err) {
        console.error('Error updating product:', err);
        setError('Error updating product');
    }
};

  // Handle deleting a product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${productId}`);
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Error deleting product');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6 mt-24">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              setCurrentProduct(null); // Reset the product for adding new item
              setIsModalOpen(true);
            }}
          >
            Add Product
          </button>
          <select
            className="ml-4 border px-4 py-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Starter">Starter</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                    onClick={() => {
                      setCurrentProduct(product); // Set the current product to edit
                      setIsModalOpen(true); // Open modal
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for adding/editing products */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setCurrentProduct(null); // Reset the product on close
          }}
          onSubmit={currentProduct ? handleEditProduct : handleAddProduct}
          product={currentProduct}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
