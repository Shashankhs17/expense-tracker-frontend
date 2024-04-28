export default function formatDate(date) {

	const currentDate = new Date(date);
	const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	});
	const formattedDate = dateTimeFormatter.format(currentDate);

	// Format - March 20, 2023
	return formattedDate;
}
