import { useState } from "react";

import { Carrousel } from "../../carrousel/Carrousel";
import { Login } from "../../login/Login";
import { Navbar } from "../navbar/Navbar";
import { Post } from "../../post/Post";
import { Register } from "../../login/Register";
import { SlideInfinit } from "../../slideInfinit/SlideInfinit";

export const LoginWrapper = () => {
	const hasNoText = true;
	const [loggedIn, setLoggedIn] = useState(false);
	const [isRegister, setIsRegister] = useState(true);

	if (loggedIn) {
		return (
			<>
				<Navbar setLoggedIn={setLoggedIn} />

				<Carrousel />

				<SlideInfinit />

				<Post
					userName="Ever"
					imgUser="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
					imgPost="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNzFSEvSrOfhmbLFMO-aDPxWbRxoSt9c6_w&s"
					textPost="El que estudia es porque duda de sus conocimientos."
				/>
				<Post
					userName="BBVA"
					imgUser="data:image/png;base64,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"
					imgPost="https://s3-us-west-2.amazonaws.com/vixnetapi/estoesmedia/637f60dfe8cd2_bbvalanzamientowebkv2.jpg"
					textPost="Disfruta de todos los veneficios!"
				/>
				<Post
					userName="Paula"
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTaHk-N1n5O6yxv7H56M1MHSr82B6Lj39GA&s"
					imgPost="https://5191985.fs1.hubspotusercontent-na1.net/hubfs/5191985/creacion-tarjetas-felicitacion-hechas-mano.jpg#keepProtocol"
					textPost="Escapando a un mundo lleno de magia."
				/>
				<Post
					userName="Patricia_Lomas"
					imgUser="https://www.mundopsicologos.com/site/article/49504/52397/las-personas-vitamina-0_ai1.jpg"
					imgPost="https://st2.depositphotos.com/1852625/5395/i/450/depositphotos_53954927-stock-photo-beautiful-landscape-of-scottish-nature.jpg"
					textPost="Mi pedacito de cielo."
				/>
				<Post
					userName="Squats & Stilettos"
					imgUser="https://i.pinimg.com/236x/c7/a0/67/c7a0679976ac8e3706605e11550967f7.jpg"
					imgPost="https://i.etsystatic.com/25692018/r/il/b3a92c/3252256015/il_570xN.3252256015_e3ee.jpg"
					textPost="Conoce nuestro gym"
				/>
				<Post
					userName="Susana_Lomas"
					imgUser="https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
					imgPost="https://i.pinimg.com/236x/b5/5f/fb/b55ffb8d552d46598c2d488e3de27b01.jpg"
					textPost=""
					hasNoText={hasNoText}
				/>
			</>
		);
	} else {
		return (
			<>
				{isRegister ? (
					<Login setLoggedIn={setLoggedIn} setIsRegister={setIsRegister} />
				) : (
					<Register setLoggedIn={setLoggedIn} setIsRegister={setIsRegister} />
				)}
			</>
		);
	}
};
