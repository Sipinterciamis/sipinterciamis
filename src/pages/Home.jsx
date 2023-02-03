import { useEffect } from "react";
import AKAP from "../data/AKAP";
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

function Home() {
  return (
	<div className="overflow-visible w-100">
    <div
      className="header-info d-flex flex-row"
      style={{ backgroundImage: `url(${bg_header})` }}
    >
      <Swiper
        className="col-md-5 col-5"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          Terminal adalah pangkalan kendaraan bermotor umum yang digunakan untuk
          mengatur kedatangan dan keberangkatan, menaikan dan menurunkan orang
          dan/atau barang, serta perpindahan moda angkutan.
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
	<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center" style={{ marginBottom
  :"80px" }}>
		<p className="text-center judul mt-lg-5 mt-3">Struktur Organisasi</p>
    <img className="img-fluid col-md-8 mt-2" style={{ borderRadius:"8px" }} src={bagan} alt="" />
	</div>
	<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center" style={{ marginBottom
  :"80px" }}>
		<p className="text-center judul mt-lg-5 mt-3">Denah Terminal Ciamis</p>
    <img className="img-fluid col-md-8 p-3 mt-2" style={{ borderRadius:"8px",border:"1px solid #B9B9B9D9",boxShadow:" 0px 2px 4px 0px rgba(0, 0, 0, 0.25)"}} src={denah} alt="" />
	</div>
	<div className="mt-3 struktur-organisasi d-flex flex-column align-items-center">
		<p className="text-center judul mt-lg-5 mt-3">Fasilitas Terminal Ciamis</p>
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
        {fasilitas.map((fasil) => (
          <SwiperSlide className="col-md-3 flex-column mx-4" style={{ border:"1px solid #B9B9B9D9",borderRadius:"8px", height:"400px",boxShadow:" 0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <img src={fasil.imageUrl} alt="" style={{ objectFit:"contain",borderRadius:"8px" }} className="p-2" />
            <p style={{ fontWeight:"500" }} className="text-center">{fasil.nama}</p>
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
          <SwiperSlide className="col-md-3 flex-column mx-4" style={{ border:"1px solid #B9B9B9D9",borderRadius:"8px", height:"400px",boxShadow:" 0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <img src={fasil.imageUrl} alt="" style={{ objectFit:"contain",borderRadius:"8px" }} className="p-2" />
            <p style={{ fontWeight:"500" }} className="text-center">{fasil.nama}</p>
          </SwiperSlide>
        ))}

      </Swiper>
	</div>
	</div>
  );
}

// function Home() {
// 	useEffect(() => {
// 		document.title = 'Home';
// 		// console.log(bus)
// 		// console.log(AKAP)
// 	}, []);

// 	return (
// 		<section className="section pt-0">
// 			<HeaderInfo />
// 			<h1 className="section-title">Ini halaman info</h1>
// 			<p className="section-description">
// 				Halo semua ini adalah website blog belajar pake <code>react</code> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore nemo error voluptas? Minus nihil
// 				tempora saepe blanditiis.
// 			</p>

// 			<div>
// 				{/* {AKAP.map((bis) => (
// 					<p>{bis.besar.map((data) => (
// 						<p>{data.namaPO} - {data.tujuan}</p>
// 					))}</p>
// 					// console.log(bis.nama)
// 				))} */}
// 			</div>
// 		</section>

// 	);
// }

export default Home;
