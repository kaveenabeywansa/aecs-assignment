const express = require('express');
const router = express.Router();
const Controller = require('../controllers/quotes-controller.js');

// Get All
router.get('/', async (req, res) => {
    const { success, data } = await Controller.readAll();

    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, messsage: "Error" });
})

// Get by User ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { success, data } = await Controller.getByUserId(id);
    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: "Error" });
})


// Create
router.post('/', async (req, res) => {
    const { success, data } = await Controller.createOrUpdate(req.body);

    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: 'Error' });
})


// Update by ID
router.put('/:id', async (req, res) => {
    const user = req.body;
    const { id } = req.params;
    user.id = id;

    const { success, data } = await Controller.createOrUpdate(user);

    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: "Error" });
})

// add new quote to user
router.post('/:id/addquote', async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { success, data } = await Controller.addQuoteToUser(id, body);
    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: "Error" });
})

// Delete by Id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { success, data } = await Controller.deleteById(id);
    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, message: 'Error' });
})

module.exports = router;