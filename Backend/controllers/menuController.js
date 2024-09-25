const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        console.log(menuItems)
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getMenuItems };
