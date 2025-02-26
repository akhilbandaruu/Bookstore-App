import React from 'react';
import styles from '../styles/layouts/AuthLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';

const AuthLayout = () => {
	return (
		<div className={styles.main_container}>
			<div className={styles.books_slider_container}>
				<Slider />
			</div>
			<div className={styles.login_container}>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
