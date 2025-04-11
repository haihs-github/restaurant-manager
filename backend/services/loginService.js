const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UnauthorizedError } = require('../utils/errors');
const User = require('../models/User');

class LoginService {
    static async login(username, password) {
        if (!username || !password) {
            throw new UnauthorizedError('Thiếu tên đăng nhập hoặc mật khẩu!');
        }

        // Bỏ qua phân biệt chữ hoa/thường nếu muốn
        const normalizedUsername = username.trim().toLowerCase();

        const user = await User.findOne({ username: normalizedUsername });

        if (!user) {
            throw new UnauthorizedError('Tài khoản không tồn tại!');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedError('Mật khẩu không đúng!');
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                fullname: user.fullname
            },
            process.env.JWT_SECRET || 'your_jwt_secret_key',
            { expiresIn: '1d' }
        );

        return {
            token,
            user: {
                username: user.username,
                fullname: user.fullname,
                email: user.email || '',
                role: user.role || 'user'
            }
        };
    }
}

module.exports = LoginService;
