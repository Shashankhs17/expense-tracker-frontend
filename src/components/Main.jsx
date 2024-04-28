import Sidebar from "./Sidebar";
import Transactions from "./Transactions";
import classes from "./Main.module.css";
import Charts from "./Charts";

function Main() {
	return (
		<main className={classes["main"]}>
			<div className={classes["main__home"]}>
				<Sidebar />
				<Transactions />
			</div>
			<div>
				<div className={classes["main__charts"]}>
					<h2>Spend analysis</h2>
					<Charts />
				</div>
			</div>
		</main>
	);
}

export default Main;
