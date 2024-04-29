/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import classes from "./ProfileCard.module.css";

const ProfiCard = ({ className }) => {
	return (
		<div className={`${classes["profile-card"]} ${className}`}>
			<h5 className={classes["profile-card__title"]}>Username</h5>
			<p className={classes["profile-card__item"]}>Show profile</p>
			<Button
				variant="primary"
				className={classes["profile-card__action"]}
			>
				Logout
			</Button>
		</div>
	);
};

export default ProfiCard;
