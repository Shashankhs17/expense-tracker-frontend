/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import classes from "./Alerts.module.css;";
import { useEffect, useRef, useState } from "react";

const Alert = ({ className, variant, message, time }) => {
	const [showAlert, setShowAlert] = useState(true);
	const timer = useRef();

	useEffect(() => {
		timer.current = setTimeout(() => {
			setShowAlert(false);
		}, time);
	}, []);

	return createPortal(
		<>
			{showAlert && (
				<div
					className={`${classes["alert"]} ${className} ${classes[variant]} move-up`}
				>
					<span className={classes["alert__icon"]}>x</span>
					<span className={classes["alert__message"]}>{message}</span>
				</div>
			)}
		</>,
		document.getElementById("modal")
	);
};

export default Alert;
