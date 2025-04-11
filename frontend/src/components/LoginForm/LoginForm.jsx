import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			console.log("🧾 Gửi dữ liệu:", { username, password });

			const res = await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			console.log("📥 Phản hồi:", data);

			if (!res.ok) {
				alert(data.message || '❌ Đăng nhập thất bại!');
				return;
			}

			alert('🎉 Đăng nhập thành công!');
			localStorage.setItem('token', data.token);
			localStorage.setItem('username', data.user?.username || '');

			navigate('/');
		} catch (error) {
			console.error('💥 Lỗi kết nối:', error);
			alert('Không thể kết nối đến server!');
		} finally {
			setLoading(false);
		}
	};

	// Inline style object
	const styles = {
		form: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			width: '100%',
			maxWidth: '400px',
			margin: '4rem auto',
			padding: '2rem',
			background: '#fff',
			borderRadius: '12px',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
		},
		input: {
			padding: '0.75rem',
			fontSize: '1rem',
			borderRadius: '8px',
			border: '1px solid #ccc',
		},
		button: {
			padding: '0.75rem',
			fontSize: '1rem',
			borderRadius: '8px',
			border: 'none',
			backgroundColor: loading ? '#888' : '#007bff',
			color: 'white',
			fontWeight: 'bold',
			cursor: loading ? 'not-allowed' : 'pointer',
			transition: 'background-color 0.3s ease',
		},
	};

	return (
		<form style={styles.form} onSubmit={handleSubmit}>
			<h2>Đăng nhập</h2>

			<input
				type="text"
				name="username"
				placeholder="Tên đăng nhập"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
				style={styles.input}
			/>

			<input
				type="password"
				name="password"
				placeholder="Mật khẩu"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				style={styles.input}
			/>

			<button type="submit" disabled={loading} style={styles.button}>
				{loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
			</button>
		</form>
	);
}

export default LoginForm;
