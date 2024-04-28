import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Sidebar.module.css";
import SummaryCard from "./SummaryCard";
import AddExpense from "./AddExpense";
import AddBalance from "./AddBalance";
import { AppContext } from "../context/app-context";

let modalContent;

const Sidebar = () => {
	const [showModal, setShowModal] = useState(false);
	const appCtx = useContext(AppContext);

	function handleAddBalance() {
		modalContent = <AddBalance closeModal={onModalClose} />;
		setShowModal(true);
	}

	function handleAddExpense() {
		modalContent = <AddExpense closeModal={onModalClose} />;
		setShowModal(true);
	}

	function onModalClose() {
		setShowModal(false);
	}

	return (
		<>
			<Modal
				open={showModal}
				onClose={onModalClose}
			>
				{modalContent}
			</Modal>
			<aside className={classes["sidebar"]}>
				<SummaryCard
					title="Balance"
					amount={appCtx.balance}
					btnAction={handleAddBalance}
				/>
				<SummaryCard
					title="Expense"
					amount={appCtx.expense}
					btnAction={handleAddExpense}
				/>
			</aside>
		</>
	);
};

export default Sidebar;
