import { FaUserCircle } from "react-icons/fa";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes["header"]}>
			<h1 className={classes["header__title"]}>Expense tracker</h1>
			{/* TODO: Add profile icon and username here  */}
			<div className={classes["header__profile"]}>
				<FaUserCircle />
				<span>username</span>
			</div>
		</header>
	);
};

export default Header;
