import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant, size, disabled, loading, children, onClick }) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${styles[size]}`}
			disabled={disabled || loading}
			onClick={onClick}
		>
			{loading ? 'Loading...' : children}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
	loading: false,
	onClick: () => {},
};

export default Button;
