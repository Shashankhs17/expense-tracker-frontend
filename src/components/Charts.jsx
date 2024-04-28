import classes from "./Charts.module.css";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { categoryMap } from "../utils/Icon";
import getColor, { getColors } from "../utils/color-generator";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

function Charts() {
	const appCtx = useContext(AppContext);

	function getCategoryWiseCount() {
		const categories = Object.keys(categoryMap);

		const data = {};
		for (let category of categories) {
			data[category] = 0;
		}

		appCtx.transactions.forEach((transaction) => {
			data[transaction.category] += 1;
		});

		return data;
	}

	const categoryWiseCount = Object.entries(getCategoryWiseCount()).sort(
		(a, b) => b[1] - a[1]
	);

	const labels = categoryWiseCount.map((_ct) => _ct[0]);
	const dataSet = categoryWiseCount.map((_ct) => _ct[1]);

	const pieData = {
		labels: labels,
		datasets: [
			{
				label: " No. of transactions",
				data: dataSet,
				backgroundColor: getColors(dataSet.length, 0.8),
				borderColor: getColors(dataSet.length),
				borderWidth: 1,
			},
		],
	};

	const barData = {
		labels: ["Categories"],
		datasets: dataSet.slice(0, 3).map((_data, _idx) => ({
			label: labels[_idx],
			data: [_data],
			borderColor: getColor(_idx),
			backgroundColor: getColor(_idx, 0.9),
		})),
	};

	return (
		<>
			{appCtx.transactions.length > 0 ? (
				<div className={classes["charts"]}>
					<div className={classes["charts__pie"]}>
						<h4>Expense distribution</h4>
						<PieChart data={pieData} />
					</div>
					<div className={classes["charts__bar"]}>
						<h4>Top spends</h4>
						<BarChart data={barData} />
					</div>
				</div>
			) : (
				<p className="info-msg">
					Start adding expenses to get useful results!
				</p>
			)}
		</>
	);
}

export default Charts;
