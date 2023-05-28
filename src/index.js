const express = require('express');
require('dotenv').config();

const c = require('colors');
const cors = require('cors');
const mongodbConnection = require('./config/mongodb');
const routes = require('./routes');

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// routes
app.get('/', (req, res) => {
	res.send('Welcome to my API');
});

// mongodb connection
mongodbConnection();

// server listening
app.listen(port, () => console.log(`Servidor Corriendo en el Puerto: ${port}`.bgYellow));
