/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { categoryMap } from "../utils/Icon";
import getTodaysDate from "../utils/get-today-date";
import Button from "../UI/Button";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import Input from "../UI/Input";
import Select from "../UI/Select";
import classes from "./AddBalance.module.css";

const categories = Object.keys(categoryMap);
const todaysDate = getTodaysDate();

const AddExpense = ({ closeModal, editData }) => {
	const appCtx = useContext(AppContext);

	function handleSubmit(event) {
		// Prevent default action of form submission
		event.preventDefault();

		// Get the form data as an object
		const formData = Object.fromEntries(new FormData(event.target));

		// Add a random and unique identifier for each record
		formData._id = editData ? editData._id : nanoid();

		// reset the form entries
		event.target.reset();

		// update context
		editData ? appCtx.editExpense(formData) : appCtx.addExpense(formData);

		// close the modal
		closeModal();
	}

	return (
		<div className={classes["form"]}>
			<h3>Add new Expense</h3>
			<form onSubmit={handleSubmit}>
				<Input
					label="title"
					id="title"
					type="text"
					placeholder="title"
					defaultValue={editData ? editData.title : ""}
					required
				/>
				<Select
					label="category"
					id="category"
					defaultValue={editData ? editData.category : "general"}
					placeholder="category"
					required
				>
					{categories.map((category) => (
						<option
							value={category}
							key={category}
						>
							{category}
						</option>
					))}
				</Select>
				<Input
					label="date"
					id="date"
					type="date"
					placeholder="dd-mm-yyyy"
					max={todaysDate}
					defaultValue={editData ? editData.date : todaysDate}
					required
				/>
				<Input
					label="price"
					id="price"
					type="number"
					placeholder="price"
					defaultValue={editData ? editData.price : ""}
					required
				/>
				<Button
					type="submit"
					variant="primary"
				>
					Submit
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

export default AddExpense;
