import { Container } from "react-bootstrap";
import bgWisata from "../data/images/wisata/bgWisata.png"
import MyCard from "../components/Card";
import wisata from "../data/wisata";
// import "./styles/wisata.css";
import "./styles/wisata.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Wisata = () => {

	const location = useLocation(); // once ready it returns the 'window.location' object
	const [url, setUrl] = useState(null);
	useEffect(() => {
		setUrl(location.pathname);
		// console.log(url);
	}, [location]);


	useEffect(() => {
		document.title = "Tempat Wisata - SIPINTER Ciamis";
	}, []);

	return (
		<div className="detail-wisata">
			{/* START SECTION HERO */}
			<div
				className="d-flex justify-content-center"
				style={{ backgroundImage: `url(${bgWisata})` }}
			>
				<Container className="d-flex justify-content-center flex-column align-items-center align-items-lg-start">
					<div className="text-center w-100 judul-header">
						<h1 className="text-white fw-semibold">
							Temukan Objek Wisata di Sekitar Kota Ciamis
						</h1>
						<p className="text-white">
							Cari destinasi dan temukan rute ke tempat wisata yang ingin kamu
							kunjungi disini
						</p>
					</div>
				</Container>
			</div>
			{/* END SECTION HERO */}

			{/* START SECTION WISATA TERPOPULER */}
			<div className="mb-5">
				<h2 className="text-center mt-5 mb-4 wisata-populer fw-semibold">Wisata Terpopuler</h2>
				<Container
					className="pb-4"
					style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}
				>
					<div className="row justify-content-center pb-5 gap-4">
						{wisata.map(data => (
							<div className="col-10 col-sm-5 col-md-5">
								<Link to={`/wisata/${data.slug}`} className={"text-decoration-none text-dark" + (url === `/wisata/${data.slug}` ? " active" : "")}>
									<MyCard
										kategori="Wisata Alam"
										judul={data.nama}
										// lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
										image={data.imageUrl}
									/>
								</Link>
							</div>
						))}
					</div>
				</Container>
			</div>
			{/* END SECTION WISATA TERPOPULER */}
		</div>
	);
};

export default Wisata;
