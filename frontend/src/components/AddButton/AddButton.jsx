import styles from './AddButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddButton({ handleAddClick }) {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card}>
				<div className={styles.name}>Thêm bàn mới</div>

				<button className={styles.bookBtn} onClick={handleAddClick}>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	);
}


export default AddButton;