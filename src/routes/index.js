const { Router } = require('express');
const fs = require('fs');
const router = Router();
const PATH_ROUTES = __dirname;

const list_files = fs.readdirSync(PATH_ROUTES);

list_files.filter((file) => {
	const nameFile = file.split('.').shift();

	if (nameFile !== 'index' && nameFile !== 'adso') {
		router.use(`/adso/${nameFile}`, require(`./${file}`));
	} else if (nameFile === 'adso') {
		router.use(`/${nameFile}`, require(`./${file}`));
	}
});

module.exports = router;
