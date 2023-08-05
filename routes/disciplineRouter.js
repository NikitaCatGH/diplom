const Router = require('express');
const router = new Router();
const disciplineController = require('../controllers/disciplineController');

router.post('/', disciplineController.create);
router.get('/', disciplineController.get);
router.get('/:id', disciplineController.getOne);


module.exports = router;