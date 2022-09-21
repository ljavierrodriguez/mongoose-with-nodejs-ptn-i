const { home } = require('../controllers/main.controller');

const router = require('express').Router();

router.get('/', home);

module.exports = router;