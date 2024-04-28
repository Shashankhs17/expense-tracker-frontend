/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import Button from "../UI/Button";
import classes from "./AddBalance.module.css";
import Input from "../UI/Input";

const AddBalance = ({ closeModal }) => {
	const appCtx = useContext(AppContext);

	function handleSubmit(event) {
		// Prevent default action of form submission
		event.preventDefault();

		// Get the form data as an object
		const income = new FormData(event.target).get("income");

		// reset the form entries
		event.target.reset();

		// update context
		appCtx.addBalance(income);

		// close the modal
		closeModal();
	}

	return (
		<div className={classes["form"]}>
			<h3>Add Balance</h3>
			<form onSubmit={handleSubmit}>
				<Input
					id="income"
					type="number"
					placeholder="Enter your income here"
					min={0}
					required
				/>
				<Button
					type="submit"
					variant="primary"
				>
					Add
				</Button>
				<Button
					type="button"
					variant="text"
					onClick={closeModal}
				>
					cancel
				</Button>
			</form>
		</div>
	);
};

export default AddBalance;
