import { useState } from "react";

import {
	FaRegComment,
	FaHeart,
	FaRegHeart,
	FaRegPaperPlane,
} from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";

export const Like = () => {
	const [isLiked, setIsLiked] = useState(false);
	const [count, setCount] = useState("");

	const handleIsLiked = () => {
		if (isLiked) {
			setIsLiked(false);
			// console.log(0);
			setCount(count - 1);
		} else {
			// console.log(1);
			setIsLiked(true);
			setCount(count + 1);
		}
	};

	return (
		<>
			<div className="flex justify-between">
				<div className="flex gap-3">
					{isLiked ? (
						<FaHeart
							className="size-6"
							style={{ color: "red" }}
							onClick={handleIsLiked}
						/>
					) : (
						<FaRegHeart className="size-6" onClick={handleIsLiked} />
					)}

					<FaRegPaperPlane className="size-6" />
					<FaRegComment className="size-6" />
				</div>
				<div>
					<BiBookmark className="size-6" />
				</div>
			</div>
			<div className="py-3">
				{isLiked ? (
					<p>
						<span>{count}</span> Me gusta
					</p>
				) : (
					<p>{count === 0 && ""}</p>
				)}
			</div>
		</>
	);
};
