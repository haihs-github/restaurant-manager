const express = require('express');
const router = express.Router();

const { registerController } = require('../controllers/registerController');
const { login } = require('../controllers/loginController'); // Dùng destructuring đúng

const loginValidator = require('../validations/loginValidation'); // Middleware validate đầu vào

// Routes
router.post('/register', registerController);
router.post('/login', loginValidator, login); 
module.exports = router;
