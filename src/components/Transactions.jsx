import { useContext, useState } from "react";
import { MdArrowBack, MdOutlineArrowForward } from "react-icons/md";

import Button from "../UI/Button";
import TransactionBar from "./TransactionBar";
import classes from "./Transactions.module.css";
import { AppContext } from "../context/app-context";

const MAX_TR_COUNT = 5;

const Transactions = () => {
	const appCtx = useContext(AppContext);
	const [page, setPage] = useState(0);

	function goToPreviousPage() {
		if (page > 0) {
			setPage((prev) => prev - 1);
		}
	}

	function goToNextPage() {
		if ((page + 1) * MAX_TR_COUNT < appCtx.transactions.length) {
			setPage((prev) => prev + 1);
		}
	}

	return (
		<div className={classes["transactions"]}>
			<h2>Recent Transactions</h2>
			{appCtx.transactions.length > 0 ? (
				<>
					{/* <div className={classes["transactions__filters"]}>
					<div>
						Sort by: <span>Date | |</span> <span>Price | |</span>
					</div>
					<div></div>
				</div> */}
					<div className={classes["transactions__list"]}>
						<>
							{appCtx.transactions
								.slice(
									page * MAX_TR_COUNT,
									(page + 1) * MAX_TR_COUNT
								)
								.map((transaction) => (
									<TransactionBar
										key={transaction._id}
										data={transaction}
										deleteHandler={() =>
											appCtx.deleteExpense(
												transaction._id
											)
										}
									/>
								))}
						</>
						<div className={classes["transactions__pagination"]}>
							<Button
								variant="primary"
								onClick={goToPreviousPage}
							>
								<MdArrowBack />
							</Button>
							<span>{page + 1}</span>
							<Button
								variant="primary"
								onClick={goToNextPage}
							>
								<MdOutlineArrowForward />
							</Button>
						</div>
					</div>
				</>
			) : (
				<p className="info-msg">No transactions to show</p>
			)}
		</div>
	);
};

export default Transactions;
