const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItems = [
	check('instructorId').exists().notEmpty().isString(),
	check('date').exists().notEmpty().isString(),
	check('title').exists().notEmpty().isString(),
	check('tasks'),
	check('state').exists().notEmpty().isBoolean(),

	(req, res, next) => validateResult(req, res, next),
];

module.exports = { validatorCreateItems };
