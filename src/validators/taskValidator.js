const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItem = [
	check('jobId').exists().notEmpty().isString(), //
	check('text').exists().notEmpty().isString(),

	(req, res, next) => validateResult(req, res, next),
];

const validatorUpdateItem = [
	check('jobId').exists().notEmpty().isString(), //
	check('text').exists().notEmpty().isString(),

	(req, res, next) => validateResult(req, res, next),
];
const validatorIdItem = [
	check('id').exists().notEmpty().isString(), //

	(req, res, next) => validateResult(req, res, next),
];

module.exports = {
	validatorCreateItem,
	validatorUpdateItem,
	validatorIdItem,
};
