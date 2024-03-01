const express = require('express');
require('dotenv').config();
const path = require('path');

const c = require('colors');
const cors = require('cors');
const mongodbConnection = require('./config/mongodb');
const routes = require('./routes');

// settings
const app = express();
const port = process.env.PORT || 9000;
app.use(express.static(path.join(process.cwd(), 'src/public')));

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/bot.qr.png', (req, res) => {
	res.sendFile(path.join(process.cwd(), 'bot.qr.png'));
});

// mongodb connection
mongodbConnection();

// server listening
app.listen(port, () => console.log(`Servidor Corriendo en el Puerto: ${port}`.bgYellow));
