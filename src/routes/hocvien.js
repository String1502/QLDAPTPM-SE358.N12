const express = require('express');
const router = express.Router();

const hocvienRouter = require('../controllers/HocVienController');

router.get('/update', hocvienRouter.updateHV);
router.get('/read', hocvienRouter.readHV);
router.get('/create', hocvienRouter.createHV);
router.get('/', hocvienRouter.index);

module.exports = router;
