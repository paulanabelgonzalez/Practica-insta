import { ImgSlide } from "../imgSlide/ImgSlide";

import { FaFacebookMessenger } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";

import style from "./slideInfinit.module.css";

export const SlideInfinit = () => {
	return (
		<div className={style.contain}>
			<ul className={style.list}>
				<ImgSlide icon={<TfiInstagram />} textIcon="Instagram" />
				<ImgSlide icon={<BsWhatsapp />} textIcon="Whatsapp" />
				<ImgSlide icon={<IoLogoFacebook />} textIcon="Facebook" />
				<ImgSlide icon={<FaFacebookMessenger />} textIcon="Messenger" />
				<ImgSlide icon={<FaMeta />} textIcon="Meta" />
			</ul>
			<ul className={style.list}>
				<ImgSlide icon={<TfiInstagram />} textIcon="Instagram" />
				<ImgSlide icon={<BsWhatsapp />} textIcon="Whatsapp" />
				<ImgSlide icon={<IoLogoFacebook />} textIcon="Facebook" />
				<ImgSlide icon={<FaFacebookMessenger />} textIcon="Messenger" />
				<ImgSlide icon={<FaMeta />} textIcon="Meta" />
			</ul>
		</div>
	);
};
