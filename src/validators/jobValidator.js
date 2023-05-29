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

const validatorUpdateItems = [
	check('id').exists().notEmpty().isString(),
	check('instructorId').exists().notEmpty().isString(),
	check('date').exists().notEmpty().isString(),
	check('title').exists().notEmpty().isString(),
	check('state').exists().notEmpty().isBoolean(),

	(req, res, next) => validateResult(req, res, next),
];

const validatorIdItem = [
	check('id').exists().notEmpty(), //

	(req, res, next) => validateResult(req, res, next),
];

module.exports = {
	validatorCreateItems,
	validatorIdItem,
	validatorUpdateItems,
};
