const mongoose = require('mongoose');

const mongodbConnection = () => {
	const DB_URI = process.env.MONGODB_URI;

	mongoose.connect(DB_URI, (err, res) => {
		if (!err) {
			console.log('***CONEXION CORRECTA A LA BASE DE DATOS***'.bgCyan);
		} else {
			console.log('***ERROR DE CONEXION***'.bgRed);
		}
	});
};

module.exports = mongodbConnection;
