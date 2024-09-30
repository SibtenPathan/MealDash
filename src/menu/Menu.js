import React, { useState, useEffect } from 'react';
import Category from './Category';
import Cards from './Cards';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';

const Menu = () => {
  const [category, setCategory] = useState("All");
  const [priceOrder, setPriceOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredItems = menuItems
    .filter(item =>
      category === "All" || item.category === category
    )
    .filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedItems = filteredItems.sort((a, b) => {
    if (priceOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (priceOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <Navbar />
      <Category setCategory={setCategory} setPriceOrder={setPriceOrder} setSearchTerm={setSearchTerm} />
      <Cards menuItems={sortedItems} />
      <Footer />
    </div>
  );
};

export default Menu;
