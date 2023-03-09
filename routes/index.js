const router = require('express').Router();

//import all api routes from /api/index.js
const apiRoutes = require('./api');

//add '/api' prefix to all api routes imported from 'api' directory
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong route'));

module.exports = router;