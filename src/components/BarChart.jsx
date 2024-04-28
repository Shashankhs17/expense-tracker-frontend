/* eslint-disable react/prop-types */
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	indexAxis: "y",
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: false,
			text: "Top spends",
		},
	},
};

function BarChart({ data }) {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
}

export default BarChart;
