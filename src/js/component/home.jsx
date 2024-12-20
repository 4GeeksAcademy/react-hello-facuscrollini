import React from "react";
import Pepito from "./Card";
import NavBar from "./Navbar"
import Jumbo from "./Jumbotron"
import Card from "./Card"
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {



	return (
		<div className="text-center">
			<NavBar/>
			<div className="container py-4 ">
				
					<Jumbo/>
				<div className="row justify-content-between">
					<Card imgUrl="https://hobbit-stockholm-nacka.hotelmix.es/data/Photos/1920x1080/10330/1033096/1033096358.JPEG" alt="Hobbit-Stockholm" description="El Hobbit Stockholm Bed and Breakfast es un buen punto de partida para los lugares de interés deportivos de Nacka(Suecia), incluido el Estadio Ericsson Globe, que está a unos 6 km de distancia." title="Hobbit Stockholm" buttonUrl="https://hobbit-stockholm-nacka.hotelmix.es/" />
					
					
					<Card imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1280x900/31368340.jpg?k=3590474fde06cb8aa15447c62cc3faa593c9723bd19a3f63efaaa49bf9ce5dfd&o=&hp=1" alt="Crazy-House" description="El Crazy House es conocido por su arquitectura y se encuentra en Dalat, a solo 3,1 km de la estación de tren de Dalat(Vietnam)." title="Crazy House" buttonUrl="https://www.booking.com/hotel/vn/crazy-house.es.html" />
					
					
					<Card alt="Quinta-Real-Zacatecas" description="Quinta Real Zacatecas esta ubicado a solo cinco minutos del centro de la ciudad, 10 minutos del Centro de Convenciones y 30 del Aeropuerto Internacional de Zacatecas." title="Quinta Real Zacatecas" buttonUrl="https://www.booking.com/hotel/mx/quinta-real-zacatecas.en-gb.html?aid=311984&label=quinta-real-zacatecas-l794at4smrM2URKp3B9u9AS267102961354%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-104405788%3Alp9198470%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YV19IumoQ3O51m4Ge68sOW8&sid=147745bd275d2570fa734ba00da86664&dest_id=-1708981&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734611143&srpvid=3e43575f6d9b0357&type=total&ucfs=1&" imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1280x900/339692926.jpg?k=83b22b1c47547464a966237bda46c46e9eff4ef8da2b5059b3f9dc1ae5a198bd&o=&hp=1" />
					
					
					<Card alt="Skylodge-Adventure-Suites" description="Skylodge Adventure Suites está a 13 km de Estacion de Buses y ofrece alojamiento con restaurante, jardín, terraza y bar." title="Skylodge Adventure Suites" buttonUrl="https://www.booking.com/hotel/pe/skylodge-adventure-suites.es.html?aid=311090&label=skylodge-adventure-suites-di_rVHs7c8aua1maslrWqgS218143170918%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-401978307801%3Alp9198470%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcWHiCDB7igB0UaPTNwvRPo&sid=147745bd275d2570fa734ba00da86664&dest_id=-367158&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734611492&srpvid=86ed581099c90224&type=total&ucfs=1&" imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1280x900/319734381.jpg?k=4429d61c638c6b479f52d6d8686a90f508a998c4b45d3f21d09885577d57123a&o=&hp=1" />
				
					</div>	
			</div>
			<Footer/>
		</div>

	);
};

export default Home;
