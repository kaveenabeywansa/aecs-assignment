const express = require('express');
const router = express.Router();
const Controller = require('../controllers/likes-controller.js');

// Get All
router.get('/', async (req, res) => {
    const { success, data } = await Controller.readAllUsers();

    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, messsage: data });
})

// Get User by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { success, data } = await Controller.getUserById(id);
    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: "Error" });
})


// Create User
router.post('/', async (req, res) => {
    const { success, data } = await Controller.createOrUpdate(req.body);

    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: 'Error' });
})


// Update User by ID
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

// add new like to user
router.post('/:id/addlike', async (req, res) => {
    const body = req.body;
    const { id } = req.params;

    const { success, data } = await Controller.addLikeToUser(id, body);

    if (success) {
        return res.json({ success, data });
    }

    return res.status(500).json({ success: false, message: "Error" });
})

// Delete User by Id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { success, data } = await Controller.deleteUserById(id);
    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, message: 'Error' });
})

module.exports = router;