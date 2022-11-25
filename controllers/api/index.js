const router = require('express').Router();

const userRoutes = require('./user-routes');
const courseRoutes = require('./course-routes');
const lectureRoutes = require('./lecture-routes');
const documentRoutes = require('./document-routes');
const brickRoutes = require('./brick-routes')


router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/lectures', lectureRoutes);
router.use('/documents', documentRoutes);
router.use('/bricks', brickRoutes)


module.exports = router;