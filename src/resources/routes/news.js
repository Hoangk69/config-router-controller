const express = require('express');
const router = express.Router();
const newsController = require('../../app/controllers/NewsController');

router.get('/', newsController.index);
router.get('/:slug', newsController.slug);
router.post('/', newsController.send);

module.exports = router;