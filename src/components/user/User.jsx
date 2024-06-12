export const User = ({ userName, imgUser, historySeen, inPost }) => {
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
			>
				<img
					src={imgUser}
					alt="img usuario"
					className={` ${
						historySeen
							? "opacity-50 object-cover rounded-full bg-white p-[3px]"
							: " object-cover rounded-full bg-white p-[3px]"
					} ${inPost ? "w-[50px] h-[50px]" : "w-[100px] h-[100px]"}`}
				/>
			</button>

			<h2 className={`${historySeen && "text-slate-400"}`}>{userName}</h2>
		</div>
		// "bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 "
	);
};
