const { body } = require('express-validator');

const loginValidator = [
    body('username')
        .notEmpty().withMessage('Tên đăng nhập không được để trống'),

    body('password')
        .notEmpty().withMessage('Mật khẩu không được để trống')
];

module.exports = loginValidator;
