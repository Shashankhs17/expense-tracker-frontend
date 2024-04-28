export default function getTodaysDate() {
	// Function to set today's date as the max date in the form
	const todaysDate = new Date().toLocaleDateString().split("/").reverse();

	let temp = todaysDate[1];
	todaysDate[1] = todaysDate[2];
	todaysDate[2] = temp;

	if (todaysDate[1].length < 2) todaysDate[1] = "0" + todaysDate[1];
	let todaysDateString = todaysDate.join("-");

	return todaysDateString;
}
