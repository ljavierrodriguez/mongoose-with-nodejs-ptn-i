require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');

const path = require('path');
const router = require('./routes');
const DB_PASSWORD = process.env.DB_PASSWORD || "123456";

const app = express()

const routesUsers = require('./routes/routesUsers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.use(routesUsers);


mongoose.connect(`mongodb+srv://lrodriguez:${DB_PASSWORD}@cluster0.ppfkx.mongodb.net/curso_node?retryWrites=true&w=majority`, (err) => {
    if (err) throw err;
    console.log("Conexion Establecida");
});


app.listen(9000, () => console.log('Server runngin at PORT 8000'));