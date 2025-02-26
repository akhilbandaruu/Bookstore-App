import React from 'react';
import styles from '../styles/layouts/MainLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className={styles.main_container}>
			<div>
				<Sidebar />
			</div>
			<div>
				<Outlet />
			</div>
			<div>
				<Header />
			</div>
		</div>
	);
};

export default MainLayout;
