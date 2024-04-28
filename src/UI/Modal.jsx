/* eslint-disable react/prop-types */
import { useEffect } from "react";
import classes from "./Modal.module.css";
import { useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, className, open, onClose, variant }) {
	const dialogRef = useRef();

	useEffect(() => {
		function handleModalCloseByClick(e) {
			const dialogBoundary = dialogRef.current.getBoundingClientRect();
			if (
				e.clientX < dialogBoundary.left ||
				e.clientX > dialogBoundary.right ||
				e.clientY < dialogBoundary.top ||
				e.clientY > dialogBoundary.bottom
			) {
				dialogRef.current.close();
				onClose();
			}
		}

		if (open) {
			dialogRef.current.showModal();
			dialogRef.current.addEventListener(
				"click",
				handleModalCloseByClick
			);
		}

		return () => {
			if (dialogRef.current) {
				dialogRef.current.close();
				dialogRef.current.removeEventListener(
					"click",
					handleModalCloseByClick
				);
			}
		};
	});

	return createPortal(
		<dialog
			className={`${classes["modal"]} ${className} ${classes[variant || "move"]}`}
			ref={dialogRef}
			onClose={onClose}
		>
			{children}
		</dialog>,
		document.getElementById("modal")
	);
}

export default Modal;
