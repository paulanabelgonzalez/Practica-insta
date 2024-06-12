import {
	FaRegComment,
	FaHeart,
	FaRegHeart,
	FaRegPaperPlane,
} from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";

export const Like = ({ isLiked }) => {
	return (
		<>
			<div className="flex justify-between">
				<div className="flex gap-3">
					{isLiked ? (
						<FaHeart className="size-6" style={{ color: "red" }} />
					) : (
						<FaRegHeart className="size-6" />
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
						<span>1</span> Me gusta
					</p>
				) : (
					""
				)}
			</div>
		</>
	);
};
