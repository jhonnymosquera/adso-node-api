const mongoose = require('mongoose');

const mongodbConnection = () => {
	const DB_URI = process.env.MONGODB_URI;

	mongoose.connect(DB_URI, (err, res) => {
		if (!err) {
			console.log('***CONEXION CORRECTA A LA BASE DE DATOS***');
		} else {
			console.log('***ERROR DE CONEXION***');
		}
	});
};

module.exports = mongodbConnection;
