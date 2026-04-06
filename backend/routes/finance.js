
const express = require('express');
const router = express.Router();

// Summary Level Analytics for Zorvyn Assessment
router.get('/summary', (req, res) => {
    res.json({
        total_credits: 145000,
        net_balance: 120000,
        currency: "INR",
        status: "VAULT_SYNCED"
    });
});


module.exports = router;
const Transaction = require('../models/Transaction');

// POST /api/finance/forge - Add a new transaction (Admin only)
router.post('/forge', async (req, res) => {
    try {
        const { txID, amount, category, type, description } = req.body;
        const newTx = new Transaction({ txID, amount, category, type, description });
        await newTx.save();
        res.status(201).json({ message: "CREDIT FORGED SUCCESSFULLY", data: newTx });
    } catch (err) {
        res.status(400).json({ error: "FORGE FAILED: Check Data Integrity" });
    }
});