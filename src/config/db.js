require('dotenv').config();

const mongoose = require('mongoose');

const DB_PASSWORD = process.env.DB_PASSWORD || "123456";

mongoose.connect(`mongodb+srv://lrodriguez:${DB_PASSWORD}@cluster0.ppfkx.mongodb.net/curso_node?retryWrites=true&w=majority`, { useNewUrlParser: true });

module.exports = mongoose