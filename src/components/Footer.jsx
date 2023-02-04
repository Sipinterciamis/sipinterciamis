import { Link } from "react-router-dom";
import "../pages/styles/wisata.css";
import call from "../data/images/wisata/icon/call.png";
import map from '../data/images/wisata/map.png'

export default function Footer() {
  return (
    <>
      <footer
        className="d-flex flex-column justify-content-around "
        style={{ position: "absolute" }}
      >
        <div className="row py-5 w-100" style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
          <div className="col d-flex gap-3 flex-column">
            <h2>SIPINTER</h2>
            <div className="d-flex flex-column gap-3">
              <Link to="/">Info</Link>
              <Link to="/trayek">Trayek</Link>
              <Link to="/wisata">Wisata</Link>
              <Link>Kritik & Saran</Link>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-between">
            <div className="row gap-3">
              <h2>Alamat</h2>
              <p>Jl. Letnan Samuji</p>
            </div>
            <div className="row gap-3">
              <h2>Kontak</h2>
              <p className="mb-0 ">
                <img src={call} alt='icon-phone' /> (0265)774237
              </p>
            </div>
          </div>
          <div className="col" style={{ backgroundImage: `url(${map})` }}>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#2F1A2A" }}>
          <p className="text-center mb-0 py-3">&#169; UPTD Terminal Ciamis</p>
        </div>

      </footer>
    </>
  );
}
