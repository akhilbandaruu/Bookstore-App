import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar_container}>
			<div className={styles.sidebar_items}>
				<div className='logo'>
					<img src='../icons/book.svg' />
				</div>
				<div className={styles.navbar_container}>
					<div className='icons'>
						<img src='../icons/dashboard-monitor.svg' />
					</div>
					<div className='icons'>
						<img src='../icons/audit-alt.svg' />
					</div>
					<div className='icons'>
						<img src='../icons/shopping-cart.svg' />
					</div>
					<div className='icons'>
						<img src='../icons/circle-user.svg' />
					</div>
				</div>
				<div>
					<div className='icons'>
						<img src='../icons/menu-dots.svg' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
