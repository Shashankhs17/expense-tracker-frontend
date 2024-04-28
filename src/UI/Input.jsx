/* eslint-disable react/prop-types */
import classes from "./Input.module.css";

function Input({ className, id, label, ...props }) {
	return (
		<div className={`${className} ${classes["input-group"]}`}>
			{label && (
				<label
					className={classes["label"]}
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<input
				className={classes["input"]}
				id={id}
				name={id}
				{...props}
			/>
		</div>
	);
}

export default Input;
