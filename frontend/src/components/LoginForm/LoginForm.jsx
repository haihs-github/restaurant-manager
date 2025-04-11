import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

function LoginForm() {
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const navigate = useNavigate(); // dùng để chuyển trang

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log('Dữ liệu đăng nhập:', formData);

			// TODO: Gửi request thực tế lên server, ví dụ:
			// const res = await axios.post('/api/login', formData);
			// if (res.data.token) {
			//   localStorage.setItem('token', res.data.token);
			// }

			// Giả sử đăng nhập thành công thì chuyển sang trang chủ:
			navigate('/');
		} catch (err) {
			console.error('Lỗi đăng nhập:', err);
			alert('Đăng nhập thất bại!');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2>Đăng nhập</h2>

			<input
				type="text"
				name="username"
				placeholder="Tên đăng nhập"
				value={formData.username}
				onChange={handleChange}
				required
			/>

			<input
				type="password"
				name="password"
				placeholder="Mật khẩu"
				value={formData.password}
				onChange={handleChange}
				required
			/>

			<button type="submit">Đăng nhập</button>
		</form>
	);
}

export default LoginForm;
