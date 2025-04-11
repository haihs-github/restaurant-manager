const registerValidation = require('../validations/registerValidation');
const { registerUser } = require('../services/registerService');
const User = require('../models/User');

const registerController = async (req, res) => {
  // Validate đầu vào
  const { error } = registerValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      message: 'Dữ liệu không hợp lệ.',
      errors: errorMessages,
    });
  }

  const { username, email } = req.body;

  try {
    // Kiểm tra username hoặc email đã tồn tại
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      const duplicatedField =
        existingUser.username === username ? 'Tên đăng nhập' : 'Email';
      return res.status(400).json({
        message: `${duplicatedField} đã được sử dụng.`,
      });
    }

    // Tạo user mới
    const savedUser = await registerUser(req.body);

    res.status(201).json({
      message: 'Tạo tài khoản thành công.',
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (err) {
    console.error('Lỗi khi tạo tài khoản:', err);
    res.status(500).json({
      message: 'Lỗi máy chủ, vui lòng thử lại sau.',
    });
  }
};

module.exports = { registerController };
