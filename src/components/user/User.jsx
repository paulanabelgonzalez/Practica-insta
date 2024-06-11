export const User = ({ userName, imgUser }) => {
	return (
		<div>
			<p>{userName}</p>
			<img src={imgUser} alt="img usuario" />
		</div>
	);
};
