const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async (userData) => {
  const { username, fullname, email, address, phone, password, role } = userData;

  // Mã hóa mật khẩu
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Tạo user mới
  const newUser = new User({
    username,
    fullname,
    email,
    address,
    phone,
    password: hashedPassword,
    role // thêm role vào đây
  });

  return await newUser.save();
};

module.exports = { registerUser };
