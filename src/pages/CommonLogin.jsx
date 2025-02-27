import React from 'react';
import styles from '../styles/pages/CommonLogin.module.css';
import Button from '../components/Button/Button';

const CommonLogin = () => {
	const handleLoginSSO = () => {
		window.location.replace('/user/account');
	};

	return (
		<div className={styles.login_container}>
			<Button variant='primary' onClick={handleLoginSSO}>
				Login Now
			</Button>
		</div>
	);
};

export default CommonLogin;
