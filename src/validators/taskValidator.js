const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorCreateItems = [
	check('jobId').exists().notEmpty().isString(), //
	check('text').exists().notEmpty().isString(),

	(req, res, next) => validateResult(req, res, next),
];

module.exports = { validatorCreateItems };
