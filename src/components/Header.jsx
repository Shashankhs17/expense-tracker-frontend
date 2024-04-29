import { FaUserCircle } from "react-icons/fa";
import classes from "./Header.module.css";
import ProfiCard from "./ProfileCard";
import { useRef, useState } from "react";

const Header = () => {
	const [showProfileCard, setShowProfileCard] = useState(false);

	const timer = useRef();

	function handleProfileShow() {
		clearTimeout(timer.current);
		setShowProfileCard(true);
	}

	function handleProfileHide() {
		timer.current = setTimeout(() => {
			setShowProfileCard(false);
		}, 200);
	}

	return (
		<header className={classes["header"]}>
			<h1 className={classes["header__title"]}>Expense tracker</h1>
			{/* TODO: Add profile icon and username here  */}
			<div
				className={classes["header__profile"]}
				onMouseOver={handleProfileShow}
				onMouseOut={handleProfileHide}
				onClick={handleProfileShow}
			>
				<FaUserCircle />
				<span>username</span>
				{showProfileCard && (
					<ProfiCard className={classes["profile-card"]} />
				)}
			</div>
		</header>
	);
};

export default Header;
