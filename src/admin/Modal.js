import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, product }) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Pre-fill the form fields if editing a product
  React.useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setImage(product.image);
    } else {
      // Clear form if adding a new product
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImage('');
    }
  }, [product]);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseFloat(price) <= 0) {
      alert('Price must be greater than 0');
      return;
    }

    if (!isValidUrl(image)) {
      alert('Please enter a valid image URL.');
      return;
    }

    setIsLoading(true);

    const newProduct = {
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
      category,
      image,
    };

    try {
      await onSubmit(newProduct);
      onClose();
    } catch (error) {
      console.error('Error adding/updating product', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modalTitle" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 id="modalTitle" className="text-xl font-bold mb-4">{product ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-2 py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              className="border border-gray-300 rounded w-full px-2 py-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              className="border border-gray-300 rounded w-full px-2 py-1"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              className="border border-gray-300 rounded w-full px-2 py-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL:</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-2 py-1"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={isLoading}>
              {isLoading ? 'Submitting...' : (product ? 'Update Product' : 'Add Product')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
