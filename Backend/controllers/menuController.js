//controllers/menuController.js
const MenuItem = require('../models/MenuItem');

// Fetch all menu items
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    
    const newMenuItem = new MenuItem({
        name,
        description,
        price,
        category,
        image,
    });

    try {
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getMenuItems, addMenuItem };
