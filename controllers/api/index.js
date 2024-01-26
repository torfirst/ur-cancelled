const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
