const router = require('express').Router();
const empController = require('../controllers/operations');

router.post('/empOne', empController.empInsertOne);

module.exports = router;
