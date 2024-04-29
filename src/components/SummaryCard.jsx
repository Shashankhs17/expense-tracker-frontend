/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import classes from "./SummaryCard.module.css";

function SummaryCard({ className, title, amount, btnAction }) {
	return (
		<div className={`${classes["summary-card"]} ${className}`}>
			<div className={classes["summary-card__left"]}>
				<span className={classes["summary-card__title"]}>{title}</span>
				<span className={classes["summary-card__amount"]}>
					{amount}
				</span>
			</div>
			<div className={classes["summary-card__right"]}>
				<Button variant="primary" onClick={btnAction}>Add {title}</Button>
			</div>
		</div>
	);
}

export default SummaryCard;
