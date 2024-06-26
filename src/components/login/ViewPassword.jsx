import { FaEye, FaEyeSlash } from "react-icons/fa";

export const ViewPassword = ({ typePassword, setTypePassword }) => {
	return (
		<span className="absolute top-[48px] right-[10px]">
			{typePassword === "password" ? (
				<FaEye onClick={() => setTypePassword("text")} />
			) : (
				<FaEyeSlash onClick={() => setTypePassword("password")} />
			)}
		</span>
	);
};
