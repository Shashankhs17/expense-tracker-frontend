/* eslint-disable react/prop-types */
import { MdFlight } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi2";
import { FaGraduationCap, FaQuestion, FaPizzaSlice } from "react-icons/fa";

export const categoryMap = {
	general: <FaQuestion />,
	travel: <MdFlight />,
	education: <FaGraduationCap />,
	food: <FaPizzaSlice />,
	shopping: <HiShoppingCart />,
	entertainment: <BiSolidCameraMovie />,
};

const Icon = ({ category }) => {
	return <>{categoryMap[category]}</>;
};

export default Icon;
