/* eslint-disable react/prop-types */
import classes from "./Button.module.css";

function Button({ children, className, variant, ...props }) {
	return (
		<button
			className={`${className} ${classes["btn"]} ${classes[variant]}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
