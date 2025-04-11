const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10,11}$/ 
  },
  role: {
    type: String,
    enum: ['admin', 'staff', 'manager'],
    default: 'user'
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', UserSchema);
