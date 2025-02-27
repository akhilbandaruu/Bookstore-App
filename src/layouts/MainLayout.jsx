import React from 'react';
import styles from '../styles/layouts/MainLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className={styles.main_container}>
			<div className={styles.header_cont}>
				<Header />
			</div>
			<div className={styles.sidebar_cont}>
				<Sidebar />
			</div>
			<div className={styles.content_cont}>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
