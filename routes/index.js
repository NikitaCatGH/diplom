const Router = require('express');
const router = new Router();
// объеденгили роутеры в один 
const disciplineRouter = require('./disciplineRouter');
const groupRouter = require('./groupRouter');
const adminRouter = require('./adminRouter');


router.use('/discipline', disciplineRouter);
router.use('/groups', groupRouter);
router.use('/admin', adminRouter);



module.exports = router;