
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    txID: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ['income', 'expense'], default: 'income' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);