import BookingTableList from '../../layout/BookingTableList';
import Header from '../../layout/Header';
import styles from './Booking.module.scss';

function Booking() {
	return (
		<div className={styles.container}>
			<Header />
			<BookingTableList />
		</div>
	);
}

export default Booking;