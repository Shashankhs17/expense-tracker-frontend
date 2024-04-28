/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import formatDate from "../utils/date-formatter";
import classes from "./TransactionBar.module.css";
import ConfirmDialog from "../UI/ConfirmDialog";
import Icon from "../utils/Icon";
import AddExpense from "./AddExpense";

let modalContent;

function TransactionBar({ data, deleteHandler }) {
	const [showModal, setShowModal] = useState(false);

	function onModalClose() {
		setShowModal(false);
	}

	function showDeleteModal() {
		modalContent = (
			<ConfirmDialog
				query={"Delete the expense?"}
				success={"Delete"}
				cancel={"cancel"}
				onSuccess={() => {
					deleteHandler();
					onModalClose();
				}}
				onCancel={onModalClose}
			/>
		);
		setShowModal(true);
	}

	function showEditModal() {
		modalContent = (
			<AddExpense
				closeModal={onModalClose}
				editData={data}
			/>
		);
		setShowModal(true);
	}

	return (
		<>
			<Modal
				open={showModal}
				onClose={onModalClose}
				variant="zoom"
			>
				{modalContent}
			</Modal>
			<div className={classes["transaction-bar"]}>
				<div className={classes["transaction-bar__icon"]}>
					<Icon category={data.category} />
				</div>
				<div className={classes["transaction-bar__details"]}>
					<p>{data.title}</p>
					<p>{formatDate(data.date)}</p>
				</div>
				<div
					className={`${classes["transaction-bar--space"]} ${classes["transaction-bar__price"]}`}
				>
					₹ {data.price}
				</div>
				<Button
					variant="text"
					onClick={showEditModal}
				>
					<CiEdit className="icon" />{" "}&nbsp;Edit
				</Button>
				<Button
					onClick={showDeleteModal}
					variant="primary"
				>
					Delete
				</Button>
			</div>
		</>
	);
}

export default TransactionBar;
