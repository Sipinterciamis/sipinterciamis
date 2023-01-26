import { useEffect } from 'react';
import AKAP from "../data/AKAP";
import terminal from "../data/images/terminal.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/header.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

function HeaderInfo() {
	return (
		<div className=''>
			<div className="">
				<Swiper
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className="mySwiper">
					<SwiperSlide>Terminal adalah pangkalan kendaraan bermotor umum yang digunakan untuk mengatur kedatangan dan keberangkatan, menaikan dan menurunkan orang dan/atau barang, serta perpindahan moda angkutan.</SwiperSlide>
					<SwiperSlide> Terminal Ciamis merupakan terminal tipe C dan Retribusi Terminal telah diatur dan ditetapkan dengan Peraturan Daerah Kabupaten Ciamis Nomor 11 Tahun 2013.
					</SwiperSlide>
					<SwiperSlide>Terminal Ciamis berada memiliki luas sebesar 17.180 M2 dan berlokasi di jalan Mr. Iwa Kusuma Sumantri, Indonesia, JL. Perintis Kemerdekaan, No. 17, Ciamis, 46211, Indonesia, Ciamis.</SwiperSlide>
					<SwiperSlide>Terminal Ciamis merupakan Induk Terminal dari beberapa terminal seperti Terminal Cisaga, Terminal Sindangkasih, Terminal Pamokolan</SwiperSlide>
				</Swiper>
			</div>
			<div className="">
				{/* <p>halo</p> */}
				<div className=''>
					<img src={terminal} alt="aa" />
				</div>
			</div>
		</div>
	)
}

function Home() {
	useEffect(() => {
		document.title = 'Home';
		// console.log(bus)
		// console.log(AKAP)
	}, []);

	return (
		<section className="section pt-0">
			<HeaderInfo />
			<h1 className="section-title">Ini halaman info</h1>
			<p className="section-description">
				Halo semua ini adalah website blog belajar pake <code>react</code> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore nemo error voluptas? Minus nihil
				tempora saepe blanditiis.
			</p>

			<div>
				{/* {AKAP.map((bis) => (
					<p>{bis.besar.map((data) => (
						<p>{data.namaPO} - {data.tujuan}</p>
					))}</p>
					// console.log(bis.nama)
				))} */}
			</div>
		</section>


	);
}

export default Home