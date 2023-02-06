import { Link } from "react-router-dom";
import "../pages/styles/wisata.scss";
import call from "../data/images/wisata/icon/call.png";
import map from "../data/images/wisata/map.png";
import Maps from "./Maps";

export default function Footer() {
	return (
		<>
			{/* <footer
				className="d-flex flex-column justify-content-around align-items-lg-stretch align-items-center"
				style={{ position: "absolute" }}
			>
				<div className="row py-5 w-100 content-foot d-flex flex-lg-row justify-content-between gap-3 ">
					<div className="d-flex flex-row justify-content-around row-dua">
						<div className="col d-flex gap-1 flex-column">
							<h2>SIPINTER</h2>
							<div className="d-flex flex-column gap-2">
								<Link to="/">Info</Link>
								<Link to="/trayek">Trayek</Link>
								<Link to="/wisata">Wisata</Link>
								<Link>Kritik & Saran</Link>
							</div>
						</div>
						<div className="col d-flex flex-column justify-content-start">
							<div className="row gap-1">
								<h2>Alamat</h2>
								<p>Jl. Letnan Samuji</p>
							</div>
							<div className="row gap-2">
								<h2>Kontak</h2>
								<p className="mb-0 ">
									<img src={call} alt="icon-phone" /> (0265)774237
								</p>
							</div>
						</div>
						<div className="ms-auto footer-map">
							<Maps mapSrc={"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7914.3825924793055!2d108.35297435448102!3d-7.3324009148422435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x2e6f5eeabc648bad%3A0xa7848cb7adc84ce5!2sKantor%20Terminal%20Kabupaten%20Ciamis%2C%20Jalan%20Mr.%20Iwa%20Kusuma%20Sumantri%2C%20Indonesia%2C%20JL.%20Perintis%20Kemerdekaan%2C%20No.%2017%2C%20Ciamis%2C%2046211%2C%20Indonesia%2C%20Ciamis%2C%20Ciamis%20Sub-District%2C%20Ciamis%20Regency%2C%20West%20Java%2C%20Indonesia%2C%20Ciamis%2C%20Kecamatan%20Ciamis%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat%2C%20Indonesia%2C%20Jawa%20Barat!3m2!1d-7.3324764!2d108.3574781!5e0!3m2!1sid!2sid!4v1675611300697!5m2!1sid!2sid"} />
						</div>
					</div>
				</div>
				<div className="w-100" style={{ backgroundColor: "#2F1A2A" }}>
					<p className="text-center mb-0 py-3 text-foot">&#169; UPTD Terminal Ciamis</p>
				</div>
			</footer> */}
			<footer class="py-5">
				<div class="container">
					<div class="row">
						<div class="col-4 col-md-3 mb-3">
							<h2>SIPINTER</h2>
							<div className="d-flex flex-column gap-2">
								<Link to="/">Info</Link>
								<Link to="/trayek">Trayek</Link>
								<Link to="/wisata">Wisata</Link>
								<a href="https://docs.google.com/forms/d/e/1FAIpQLSdePypaAdbPUsZwlX6CnybkJ40ARuXqZnG61KQmqY8jCpYqsw/viewform?vc=0&c=0&w=1&flr=0" target={"_blank"} rel={"noreferrer"}>Kritik & Saran</a>
							</div>
							{/* <ul class="nav flex-column">
								<li class="nav-item mb-2"><Link to="/">Info</Link></li>
								<li class="nav-item mb-2"><Link to="/trayek">Trayek</Link></li>
								<li class="nav-item mb-2"><Link to="/wisata">Wisata</Link></li>
								<li class="nav-item mb-2"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdePypaAdbPUsZwlX6CnybkJ40ARuXqZnG61KQmqY8jCpYqsw/viewform?vc=0&c=0&w=1&flr=0" target={"_blank"} rel={"noreferrer"}>Kritik & Saran</a></li>
							</ul> */}
						</div>

						{/* <div className="col d-flex flex-column justify-content-start">
							<div className="row gap-1">
								<h2>Alamat</h2>
								<p>Jl. Letnan Samuji</p>
							</div>
							<div className="row gap-2">
								<h2>Kontak</h2>
								<p className="mb-0 ">
									<img src={call} alt="icon-phone" /> (0265)774237
								</p>
							</div>
						</div> */}

						<div class="col-6 col-md-3 mb-3">
							<h2>Alamat</h2>
							<p>Jl. Letnan Samuji</p>
							<h2>Kontak</h2>
							<p className="mb-0 ">
								<img src={call} alt="icon-phone" /> (0265)774237
							</p>
							{/* <h5>Section</h5>
							<ul class="nav flex-column">
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
							</ul> */}
						</div>

						{/* <div class="col-6 col-md-2 mb-3">
							<h5>Section</h5>
							<ul class="nav flex-column">
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
								<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
							</ul>
						</div> */}

						<div class="col-12 col-md-6 mb-3">
							<div className="footer-map">
								<Maps mapSrc={"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7914.3825924793055!2d108.35297435448102!3d-7.3324009148422435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x2e6f5eeabc648bad%3A0xa7848cb7adc84ce5!2sKantor%20Terminal%20Kabupaten%20Ciamis%2C%20Jalan%20Mr.%20Iwa%20Kusuma%20Sumantri%2C%20Indonesia%2C%20JL.%20Perintis%20Kemerdekaan%2C%20No.%2017%2C%20Ciamis%2C%2046211%2C%20Indonesia%2C%20Ciamis%2C%20Ciamis%20Sub-District%2C%20Ciamis%20Regency%2C%20West%20Java%2C%20Indonesia%2C%20Ciamis%2C%20Kecamatan%20Ciamis%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat%2C%20Indonesia%2C%20Jawa%20Barat!3m2!1d-7.3324764!2d108.3574781!5e0!3m2!1sid!2sid!4v1675611300697!5m2!1sid!2sid"} />
							</div>

						</div>
					</div>
				</div>
			</footer>
			<div className="w-100" style={{ backgroundColor: "#2F1A2A" }}>
				<p className="text-center mb-0 py-3 text-white">&#169; UPTD Terminal Ciamis</p>
			</div>
		</>
	);
}
