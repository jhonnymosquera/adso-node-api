const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItem = [
	check('day').exists().notEmpty(),
	check('date').exists().notEmpty(),
	check('state').exists().notEmpty().isBoolean(),
	check('instructorId').exists().notEmpty(),

	(req, res, next) => validateResult(req, res, next),
];

const validatorIdItem = [
	check('id').exists().notEmpty(), //

	(req, res, next) => validateResult(req, res, next),
];

const validatorUpdateItem = [
	check('id').exists().notEmpty(),
	check('date').exists().notEmpty(),
	check('state').exists().notEmpty().isBoolean(),
	check('instructorId').exists().notEmpty(),

	(req, res, next) => validateResult(req, res, next),
];

module.exports = {
	validatorCreateItem,
	validatorIdItem,
	validatorUpdateItem,
};
