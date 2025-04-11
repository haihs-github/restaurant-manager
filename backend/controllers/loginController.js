const loginService = require('../services/loginService');
const { validationResult } = require('express-validator');
const { ValidationError } = require('../utils/errors');

const login = async (req, res, next) => {
    try {
        // Kiểm tra lỗi validation từ express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(err => err.msg).join(', ');
            throw new ValidationError(`Lỗi xác thực: ${errorMessages}`);
        }

        const { username, password } = req.body;
        const result = await loginService.login(username, password);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = { login };
