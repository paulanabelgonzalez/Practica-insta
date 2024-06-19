import { useState } from "react";

export const User = ({ userName, imgUser, inPost }) => {
	const [historySeen, setHistorySeen] = useState(false);

	const handleView = () => {
		if (historySeen) {
			setHistorySeen(false);
		} else {
			setHistorySeen(true);
		}
	};

	return (
		<div
			className="flex items-center gap-2"
			style={{ flexDirection: inPost ? "row" : "column" }}
		>
			<button
				className={`${
					historySeen
						? "bg-gradient-to-r from-zinc-400 via-zinc-700 to-zinc-900 rounded-full"
						: "bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 rounded-full"
				} ${inPost ? "p-1" : "p-1.5"} `}
				onClick={handleView}
			>
				<img
					src={imgUser}
					alt="img usuario"
					className={`aspect-square object-cover rounded-full bg-white p-[3px] ${
						historySeen ? "opacity-50 " : ""
					} ${inPost ? "w-[50px]" : "max-w-[100px] w-[100px]"}`}
				/>
			</button>

			<h2 className={`${historySeen && "text-slate-400"}`}>{userName}</h2>
		</div>
	);
};
