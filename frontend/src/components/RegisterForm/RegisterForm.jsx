import { useState } from 'react';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
	const [formData, setFormData] = useState({
		username: '',
		fullname: '',
		address: '',
		phone: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: ''
	});

	const [passwordMatch, setPasswordMatch] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const updated = { ...prev, [name]: value };

			if (name === 'password' || name === 'confirmPassword') {
				setPasswordMatch(updated.password === updated.confirmPassword);
			}

			return updated;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!passwordMatch) {
			alert('Mật khẩu không trùng khớp!');
			return;
		}

		try {
			const response = await fetch('http://localhost:5000/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				alert('Đăng ký thành công!');
				console.log(result);
				// Optional: reset form
				setFormData({
					username: '',
					fullname: '',
					address: '',
					phone: '',
					email: '',
					password: '',
					confirmPassword: '',
					role: ''
				});
			} else {
				alert(result.message || 'Đăng ký thất bại!');
			}
		} catch (error) {
			console.error('❌ Lỗi khi gọi API:', error);
			alert('Lỗi kết nối server!');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2>Thêm nhân viên</h2>

			<input type="text" name="username" placeholder="Tên đăng nhập" value={formData.username} onChange={handleChange} required />
			<input type="text" name="fullname" placeholder="Họ và tên" value={formData.fullname} onChange={handleChange} required />
			<input type="text" name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} required />
			<input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required />
			<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
			<input type="password" name="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} required />
			<input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" value={formData.confirmPassword} onChange={handleChange} required />

			{!passwordMatch && (
				<p className={styles.error}>Mật khẩu không trùng khớp</p>
			)}

			<select name="role" value={formData.role} onChange={handleChange} required>
				<option value="">-- Chọn vai trò --</option>
				<option value="manager">Quản lý</option>
				<option value="staff">Nhân viên</option>
			</select>

			<button type="submit" disabled={!passwordMatch}>Đăng ký</button>
		</form>
	);
}

export default RegisterForm;
