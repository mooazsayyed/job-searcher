// app-backend/src/routes/healthRoutes.js

const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/', healthController.getHealth);

module.exports = router;