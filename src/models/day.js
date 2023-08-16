const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
	_id: {
		type: String,
		require: true,
	},
	day: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	state: {
		type: Boolean,
		require: true,
	},
	instructorId: {
		type: String,
		require: true,
	},
});

daySchema.statics.findAllData = function () {
	const joinData = this.aggregate([
		// estamos en days
		{
			$lookup: {
				from: 'instructors', // Relacion day --> instructor
				localField: 'instructorId', // en local day.instructorId
				foreignField: '_id', // se relacionara con instructor._id
				as: 'instructor', // el nombre donde se almacenara la relacion
			},
		},
		{
			$unwind: '$instructor',
		},
	]);

	return joinData;
};

daySchema.statics.findOneData = function (id) {
	const joinData = this.aggregate([
		// estamos en days
		{
			$match: {
				_id: id,
			},
		},
		{
			$lookup: {
				from: 'instructors', // Relacion day --> instructor
				localField: 'instructorId', // en local day.instructorId
				foreignField: '_id', // se relacionara con instructor._id
				as: 'instructor', // el nombre donde se almacenara la relacion
			},
		},
		{
			$unwind: '$instructor',
		},
	]);

	return joinData;
};

module.exports = mongoose.model('days', daySchema);
