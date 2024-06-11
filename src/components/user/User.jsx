export const User = ({ userName, imgUser, historySeen }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<button
				className={`${
					historySeen
						? "bg-gradient-to-r from-zinc-400 via-zinc-700 to-zinc-900 p-1.5 rounded-full"
						: "bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 p-1.5 rounded-full"
				} `}
			>
				<img
					src={imgUser}
					alt="img usuario"
					className={` ${
						historySeen
							? "opacity-50 w-[100px] h-[100px] object-cover rounded-full bg-white p-[3px]"
							: "w-[100px] h-[100px] object-cover rounded-full bg-white p-[3px]"
					}`}
				/>
			</button>

			<h2 className={`${historySeen && "text-slate-400"}`}>{userName}</h2>
		</div>
		// "bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 "
	);
};
