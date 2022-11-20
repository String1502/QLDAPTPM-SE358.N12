const express = require('express');
const router = express.Router();

const hocvienRouter = require('../controllers/HocVienController');

router.get('/', hocvienRouter.index);

module.exports = router;
