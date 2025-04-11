const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .required()
      .messages({
        'string.empty': 'Tên đăng nhập không được để trống.',
        'string.min': 'Tên đăng nhập phải có ít nhất 3 ký tự.'
      }),

    fullname: Joi.string()
      .min(3)
      .required()
      .messages({
        'string.empty': 'Họ và tên không được để trống.',
        'string.min': 'Họ và tên phải có ít nhất 3 ký tự.'
      }),

    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.empty': 'Email không được để trống.',
        'string.email': 'Email không đúng định dạng.'
      }),

    address: Joi.string()
      .required()
      .messages({
        'string.empty': 'Địa chỉ không được để trống.'
      }),

    phone: Joi.string()
      .pattern(/^[0-9]{10,}$/)
      .required()
      .messages({
        'string.empty': 'Số điện thoại không được để trống.',
        'string.pattern.base': 'Số điện thoại phải gồm ít nhất 10 chữ số.'
      }),

    password: Joi.string()
      .min(6)
      .required()
      .messages({
        'string.empty': 'Mật khẩu không được để trống.',
        'string.min': 'Mật khẩu phải có ít nhất 6 ký tự.'
      }),

    confirmPassword: Joi.valid(Joi.ref('password'))
      .required()
      .messages({
        'any.only': 'Mật khẩu xác nhận không khớp.',
        'any.required': 'Vui lòng nhập lại mật khẩu.'
      }),

    role: Joi.string()
      .valid('manager', 'staff')
      .required()
      .messages({
        'any.only': 'Vai trò phải là "Quản lý" hoặc "Nhân Viên".',
        'string.empty': 'Vui lòng chọn vai trò.'
      }),
  });

  return schema.validate(data, { abortEarly: false });
};

module.exports = registerValidation;
