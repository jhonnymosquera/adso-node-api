const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItems = [
	check('name').exists().notEmpty(),
	check('email'),
	check('avatar').exists().notEmpty(),
	check('class').exists().notEmpty(),
	check('transversal').exists().notEmpty(),
	check('jobs'),

	(req, res, next) => validateResult(req, res, next),
];

const validatorUpdateItems = [
	check('id').exists().notEmpty(),
	check('name').exists().notEmpty(),
	check('email'),
	check('avatar').exists().notEmpty(),
	check('class').exists().notEmpty(),
	check('transversal').exists().notEmpty(),

	(req, res, next) => validateResult(req, res, next),
];

const validatorIdItem = [
	check('id').exists().notEmpty(), //

	(req, res, next) => validateResult(req, res, next),
];

module.exports = {
	validatorCreateItems,
	validatorUpdateItems,
	validatorIdItem,
};
