import { Like } from "../layout/like/Like";
import { User } from "../user/User";

export const Post = ({
	userName,
	imgUser,
	imgPost,
	textPost,
	isLiked,
	hasNoText,
}) => {
	const inPost = true;

	return (
		<div className="max-w-lg mx-auto my-14 border-t px-4 pt-9 pb-5">
			<div className="flex justify-between">
				<User userName={userName} imgUser={imgUser} inPost={inPost} />
				<a href="#" className="text-[40px]">
					...
				</a>
			</div>
			<div className="w-[480px] py-3">
				<img src={imgPost} alt="imagen-post" className="w-full" />
			</div>
			<Like isLiked={isLiked} />
			<p>
				{hasNoText ? (
					console.log(" no tiene texto")
				) : (
					<span className="font-bold">{userName}</span>
				)}
				<span className="ps-1.5">{textPost}</span>
			</p>
		</div>
	);
};
