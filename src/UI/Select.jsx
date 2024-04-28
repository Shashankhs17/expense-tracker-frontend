/* eslint-disable react/prop-types */
import classes from "./Input.module.css";

function Select({ children, id, label, className, ...props }) {
	return (
		<div className={`${className} ${classes["input-group"]}`}>
			<label
				className={classes["label"]}
				htmlFor={id}
			>
				{label}
			</label>
			<select
				className={`${className} ${classes["select"]}`}
				name={id}
				id={id}
				{...props}
			>
				{children}
			</select>
		</div>
	);
}

export default Select;
