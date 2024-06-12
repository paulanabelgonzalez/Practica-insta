import { User } from "../user/User";

export const Post = ({ userName, imgUser, imgPost, textPost }) => {
	const inPost = true;
	return (
		<div className="max-w-lg mx-auto mb-14 border-solid px-4 py-5">
			<div className="flex justify-between">
				<User userName={userName} imgUser={imgUser} inPost={inPost} />
				<button className="text-5xl">...</button>
			</div>
			<div className="w-[480px] pb-3">
				<img src={imgPost} alt="imagen-post" />
			</div>
			<p>{textPost}</p>
		</div>
	);
};
