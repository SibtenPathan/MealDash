// Backend/routes/menu.js
const express = require('express');
const { getMenuItems, addMenuItem } = require('../controllers/menuController');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// GET menu items
router.get('/', getMenuItems);

// POST new menu item
router.post('/', addMenuItem); // Ensure this line is present



// Update an existing menu item
router.put('/:id', async (req, res) => {
    try {
      const { name, description, price, category, image } = req.body;
      
      const updatedMenuItem = await MenuItem.findByIdAndUpdate(
        req.params.id,
        { name, description, price, category, image },
        { new: true, runValidators: true } // Ensures the updated document follows the schema
      );
  
      if (!updatedMenuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
      
      res.json(updatedMenuItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


  router.delete('/:id', async (req, res) => {
    console.log(`Deleting item with ID: ${req.params.id}`); // Log the ID being deleted
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deletedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(204).send();
    } catch (err) {
        console.error(err.message); // Log the error message
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
