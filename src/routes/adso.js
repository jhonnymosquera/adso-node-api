const { Router } = require('express');
const { adso } = require('../controllers/adso');

const router = Router();

router.get('/', adso);

module.exports = router;
