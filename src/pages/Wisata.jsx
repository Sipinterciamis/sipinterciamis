import { Container } from "react-bootstrap";
import background from "../data/images/wisata/wisata.png";
import iconBuilding from "../data/images/wisata/icon/building.svg";
import iconLocation from "../data/images/wisata/icon/location.svg";
import iconSearch from "../data/images/wisata/icon/search.png";
import rectangle from "../data/images/wisata/Rectangle.png";
import MyCard from "../components/Card";
import "./styles/wisata.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Wisata = () => {
  useEffect(() => {
    document.title = "Tempat Wisata - Sipinter Ciamis";
  }, []);

  return (
    <div>
      {/* START SECTION HERO */}
      <div
        className="d-flex justify-content-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container className="d-flex justify-content-center flex-column align-items-center align-items-lg-start">
          <div className="text-center w-100 judul-header">
            <h3 className="text-white">
              Temukan Rute Wisata
            </h3>
            <p className="text-white">
              Cari destinasi dan temukan rute ke tempat wisata yang ingin kamu
              kunjungi disini
            </p>
          </div>
          {/* <div className="d-flex justify-content-center w-100">
            <div
              className="search-filter gap-3 col-md-9 col-12 py-4 mt-5 d-flex flex-lg-row flex-column justify-content-around align-items-center"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginBottom: "80px",
              }}
            >
              <div className="destinasi ms-3 d-flex align-items-center">
                <img
                  src={iconBuilding}
                  alt="icon"
                  style={{ position: "absolute", marginLeft: "20px" }}
                />
                <input
                  placeholder="Semua destinasi"
                  type="text"
                  className="py-3"
                  style={{
                    backgroundColor: "white",
                    paddingLeft: "60px",
                    borderRadius: "10px",
                    border: "1px solid #B9B9B9",
                  }}
                />
              </div>
              <div className="lokasi ms-lg-0 ms-3 d-flex align-items-center">
                <img
                  src={iconLocation}
                  alt="icon"
                  style={{ position: "absolute", marginLeft: "20px" }}
                />
                <input
                  placeholder="Semua lokasi"
                  type="text"
                  className="py-3"
                  style={{
                    backgroundColor: "white",
                    paddingLeft: "60px",
                    borderRadius: "10px",
                    border: "1px solid #B9B9B9",
                  }}
                />
              </div>
              <button
                className="me-3 ms-lg-0 ms-3 py-lg-3 py-2"
                style={{
                  backgroundColor: "#FFBF00",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                  paddingRight: "40px",
                }}
              >
                <img src={iconSearch} alt="" className="px-3" />
                Cari wisata
              </button>
            </div>
          </div> */}
        </Container>
      </div>
      {/* END SECTION HERO */}

      {/* START SECTION WISATA TERPOPULER */}
      <div className="mb-5">
        <h1 className="text-center mt-5 mb-4 wisata-populer">Wisata Terpopuler</h1>
        <Container
          className="pb-4"
          style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}
        >
          <div className="d-flex flex-wrap gap-4 justify-content-center pb-5">
            <Link to="/wisata/1" className="text-decoration-none text-dark">
              <MyCard
                kategori="Wisata Alam"
                judul="Curug Tujuh Cibolang"
                lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
                image={rectangle}
              />
            </Link>
            <MyCard
              kategori="Wisata Alam"
              judul="Curug Tujuh Cibolang"
              lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
              image={rectangle}
            />
            <MyCard
              kategori="Wisata Alam"
              judul="Curug Tujuh Cibolang"
              lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
              image={rectangle}
            />
            <MyCard
              kategori="Wisata Alam"
              judul="Curug Tujuh Cibolang"
              lokasi="Sandingtaman, Panjalu, Ciamis, Jawa Barat"
              image={rectangle}
            />
          </div>
          <p className="text-center">This is paghination</p>
        </Container>
      </div>
      {/* END SECTION WISATA TERPOPULER */}
    </div>
  );
};

export default Wisata;
