const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// The Connection Logic
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ DATABASE: SECURE CONNECTION ESTABLISHED"))
    .catch((err) => console.log("❌ DATABASE: CONNECTION FAILED", err));

const financeRoutes = require('./routes/finance');
app.use('/api/finance', financeRoutes);

app.get('/', (req, res) => {
    res.send("FREEFLOW SERVER: ONLINE AND SECURE");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 ENGINE STARTING ON PORT ${PORT}...`);
});
