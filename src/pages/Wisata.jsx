import { Container } from "react-bootstrap";
import bgWisata from "../data/images/wisata/bgWisata.png"
import MyCard from "../components/Card";
import wisata from "../data/wisata";
import "./styles/wisata.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Wisata = () => {
	useEffect(() => {
		document.title = "Tempat Wisata - SIPINTER Ciamis";
	}, []);

	return (
		<div>
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
				<h2 className="text-center mt-5 mb-5 wisata-populer fw-semibold">Wisata Terpopuler</h2>
				<Container
					className="pb-4"
					style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}
				>
					<div className="d-flex flex-wrap gap-4 justify-content-center pb-5">
						{wisata.map(data => (
							<Link to={`/wisata/${data.slug}`} className="text-decoration-none text-dark">
								<MyCard
									kategori="Wisata Alam"
									judul={data.nama}
									// lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
									image={data.imageUrl}
								/>
							</Link>
						))}
					</div>
				</Container>
			</div>
			{/* END SECTION WISATA TERPOPULER */}
		</div>
	);
};

export default Wisata;
