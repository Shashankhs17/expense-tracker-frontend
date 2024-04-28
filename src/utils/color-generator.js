export function generateNewColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const randomColor = `rgb(${r}, ${g}, ${b})`;
	return randomColor;
}

const colors = [
	"rgb(218, 7, 59)",
	"rgb(237, 229, 244)",
	"rgb(142, 199, 210)",
	"rgb(7, 72, 91)",
	"rgb(242, 113, 39)",
	"rgb(217, 255, 91)",
	"rgb(97, 107, 117)",
	"rgb(79, 16, 37)",
	"rgb(13, 105, 134)",
	"rgb(120, 170, 0)",
	"rgb(21, 54, 45)",
];

export default function getColor(index, opacity = 1) {
	const color = index < colors.length ? colors[index] : generateNewColor();
	let sub = color.substring(4, color.length - 1);
	sub += `, ${opacity}`;
	return `rgba(${sub})`;
}

export function getColors(count, opacity = 1) {
	const colors = [];

	for (let i = 0; i < count; i++) {
		colors.push(getColor(i, opacity));
	}

	return colors;
}
