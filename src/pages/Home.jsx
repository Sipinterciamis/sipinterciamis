import { useEffect } from "react";
import terminal from "../data/images/terminal.jpg";
import bg_header from "../data/images/info/info-header-bg.png";
import "./styles/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import bagan from '../data/images/info/BaganOrganisasi.png'
import denah from '../data/images/info/denah.png'
import fasilitas from '../data/fasilitas'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/header.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Card, Container } from "react-bootstrap";

function Home() {

	useEffect(() => {
		document.title = 'Sipinter Ciamis - Info'
	}, [])

	return (
		<div className="overflow-visible w-100">
			{/* START HEADER */}
			<div
				className="header-info d-flex flex-row"
				style={{ backgroundImage: `url(${bg_header})` }}
			>
				<Swiper
					className="col-md-5 col-5"
					pagination={{
						clickable: true,
					}}
					// navigation={true}
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
				>
					<SwiperSlide>
						Terminal adalah pangkalan kendaraan bermotor umum yang digunakan untuk
						mengatur kedatangan dan keberangkatan, menaikan dan menurunkan orang
						dan/atau barang, serta perpindahan moda angkutan.
					</SwiperSlide>
					<SwiperSlide>
						Terminal Ciamis merupakan terminal tipe C dan Retribusi Terminal telah
						diatur dan ditetapkan dengan Peraturan Daerah Kabupaten Ciamis Nomor
						11 Tahun 2013.
					</SwiperSlide>
					<SwiperSlide>
						Terminal Ciamis berada memiliki luas sebesar 17.180 M2 dan berlokasi
						di jalan Mr. Iwa Kusuma Sumantri, Indonesia, JL. Perintis Kemerdekaan,
						No. 17, Ciamis, 46211, Indonesia, Ciamis.
					</SwiperSlide>
					<SwiperSlide>
						Terminal Ciamis merupakan Induk Terminal dari beberapa terminal
						seperti Terminal Cisaga, Terminal Sindangkasih, Terminal Pamokolan
					</SwiperSlide>
				</Swiper>
				<div className="w-100 d-flex overflow-visible">
					<img className="terminal ms-lg-auto" src={terminal} alt="" />
				</div>
			</div>
			{/* END HEADER */}

			{/* START STRUKTUR ORGANISASI */}
			<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center" style={{
				marginBottom
					: "80px"
			}}>
				<p className="text-center judul mt-lg-5 mt-3">Struktur Organisasi</p>
				<img className="img-fluid col-md-8 mt-2" style={{ borderRadius: "8px" }} src={bagan} alt="" />
			</div>
			{/* END STRUKTUR ORGANISASI */}

			{/* START DENAH TERMINAL */}
			<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center" style={{
				marginBottom
					: "80px"
			}}>
				<p className="text-center judul mt-lg-5 mt-3">Denah Terminal Ciamis</p>
				<img className="img-fluid col-md-8 p-3 mt-2" style={{ borderRadius: "8px", border: "1px solid #B9B9B9D9", boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }} src={denah} alt="" />
			</div>
			{/* END DENAH TERMINAL */}

			{/* START FASILITAS */}
			<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center" style={{
				marginBottom
					: "80px"
			}}>
				<p className="text-center judul mt-lg-5 mt-3 mb-4">Fasilitas Terminal Ciamis</p>
				<Swiper
					modules={[Navigation, Pagination]}
					navigation={true}
					effect
					speed={800}
					slidesPerView={3}
					loop={true}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className="myswiper-lg col-md-7"
				>
					{/* {fasilitas.map((fasil) => (
						<SwiperSlide className="col-md-3 flex-column mx-4" style={{ border: "1px solid #B9B9B9D9", borderRadius: "8px", height: "400px", boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}>
							<img src={fasil.imageUrl} alt="" style={{ objectFit: "contain", borderRadius: "8px" }} className="p-2" />
							<p style={{ fontWeight: "500" }} className="text-center">{fasil.nama}</p>
						</SwiperSlide>
					))} */}
					{fasilitas.map((fasil) => (
						<SwiperSlide className="">
							<Card>
								<Card.Body className="p-2">
									<img src={fasil.imageUrl} alt="" style={{ objectFit: "contain", borderRadius: "7px" }} className="" />
									<p style={{ fontWeight: "500" }} className="text-center mb-0">{fasil.nama}</p>
								</Card.Body>
							</Card>

						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					modules={[Navigation, Pagination]}
					navigation={true}
					effect
					speed={800}
					slidesPerView={1}
					loop
					className="myswiper-sm col-md-7 col-10"
				>
					{fasilitas.map((fasil) => (
						<SwiperSlide className="col-md-3 flex-column mx-4" style={{ border: "1px solid #B9B9B9D9", borderRadius: "8px", height: "400px", boxShadow: " 0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}>
							<img src={fasil.imageUrl} alt="" style={{ objectFit: "contain", borderRadius: "8px" }} className="p-2" />
							<p style={{ fontWeight: "500" }} className="text-center">{fasil.nama}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* END FASILITAS */}

			{/* START PERTOKOAN */}
			<div
				className="bg-pertokoan"
			>
				<Container className="d-flex" style={{ zIndex: 2 }}>
					{/* <div className=""> */}
					<h3 style={{ marginTop: "60px" }} className="text-white text-center text-lg-start">
						Terdapat <span style={{ color: '#FFBF00' }}>56</span> toko di lingkungan Terminal Ciamis
					</h3>
					{/* </div> */}
				</Container>
			</div>
			{/* END PERTOKOAN */}

			{/* START KRITIK SARAN */}
			<Container>
				<div className="row justify-content-center align-items-center my-5">
					<div className="col text-center py-5">
						<div className='ms-auto me-auto mb-4' style={{ maxWidth: '400px', color: '#690B51' }} >
							<h1 className="mb-0 fw-bold">Kami Membutuhkan <span style={{ color: '#FFBF00' }}>Kritik & Saran</span></h1>
							<h1 className="fw-bold">Dari Anda</h1>
						</div>
						<div className='ms-auto me-auto mb-4' style={{ maxWidth: '700px' }}>
							<p className="" style={{ color: '#8E8E8E' }}>Kritik dan saran dari Anda akan sangat membantu dalam proses perkembangan Terminal Ciamis. Tekan tombol dibawah untuk mengisi formulir.</p>
						</div>
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSdePypaAdbPUsZwlX6CnybkJ40ARuXqZnG61KQmqY8jCpYqsw/viewform?vc=0&c=0&w=1&flr=0" target={"_blank"} rel={"noreferrer"} className="btn text-white rounded-pill" style={{ backgroundColor: '#FFBF00' }}>Isi Formulir</a>
					</div>
				</div>
			</Container>
			{/* END KRITIK SARAN */}
		</div>
	);
}


export default Home;
