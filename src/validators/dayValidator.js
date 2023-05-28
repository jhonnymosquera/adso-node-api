const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItems = [
	check('day').exists().notEmpty(),
	check('date').exists().notEmpty(),
	check('state').exists().notEmpty().isBoolean(),
	check('instructorId').exists().notEmpty(),

	(req, res, next) => validateResult(req, res, next),
];
module.exports = { validatorCreateItems };
