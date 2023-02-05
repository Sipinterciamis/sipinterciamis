import { Link } from "react-router-dom";
import "../pages/styles/wisata.scss";
import call from "../data/images/wisata/icon/call.png";
import map from "../data/images/wisata/map.png";

export default function Footer() {
  return (
    <>
      <footer
        className="d-flex flex-column justify-content-around align-items-lg-stretch align-items-center "
        style={{ position: "absolute" }}
      >
        <div className="row py-5 w-100 content-foot d-flex flex-lg-row justify-content-between gap-3 ">
          <div className="d-flex flex-row justify-content-around gap-5 row-dua">
            <div className="col d-flex gap-3 flex-column">
              <h2>Sipinter</h2>
              <div className="d-flex flex-column gap-3">
                <Link to="/">Info</Link>
                <Link to="/trayek">Trayek</Link>
                <Link to="/wisata">Wisata</Link>
                <Link>Kritik & Saran</Link>
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-start">
              <div className="row gap-3">
                <h2>Alamat</h2>
                <p>Jl. Letnan Samuji</p>
              </div>
              <div className="row gap-3">
                <h2>Kontak</h2>
                <p className="mb-0 ">
                  <img src={call} alt="icon-phone" /> (0265)774237
                </p>
              </div>
            </div>
          </div>
          
            <img
            className="img-fluid col-md-6 col-10 px-5"
              src={map}
              alt=""
              style={{ objectFit: "contain", height: "auto" }}
            />
        </div>
        <div className="w-100" style={{ backgroundColor: "#2F1A2A" }}>
          <p className="text-center mb-0 py-3 text-foot">&#169; UPTD Terminal Ciamis</p>
        </div>
      </footer>
    </>
  );
}
