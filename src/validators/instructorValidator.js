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

module.exports = { validatorCreateItems };
