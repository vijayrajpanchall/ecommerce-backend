const bodyParser = require('body-parser');
const express = require('express');
const signupController = require('../controllers/auth');
const router = express.Router();

router.use(bodyParser.json());

router.post('/signup', signupController.signup)
router.post('/forget-password', signupController.forgetPassword)
router.post('/change-password', signupController.changePassword)
router.post('/login', signupController.signin);

module.exports = router;