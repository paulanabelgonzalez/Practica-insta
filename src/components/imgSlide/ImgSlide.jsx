import style from "./imgSlide.module.css";

export const ImgSlide = ({ icon, textIcon }) => {
	return (
		<li className={style.item}>
			<span className={style.icon}>{icon}</span>
			<p>{textIcon}</p>
		</li>
	);
};
