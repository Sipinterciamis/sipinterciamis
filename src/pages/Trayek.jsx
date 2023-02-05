import { useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import angkots from '../data/angkot'
import AKAP from '../data/AKAP';
import AKDP from '../data/AKDP';
import petaTrayek1 from '../data/images/trayek/angkot-angdes.jpg'
import petaTrayek2 from '../data/images/trayek/trayek-au-ciamis.png'
import petaTrayek3 from '../data/images/trayek/zona-trayek-au-1.jpg'
import petaTrayek4 from '../data/images/trayek/zona-trayek-au.jpg'

import background from "../data/images/wisata/wisata.png";
import iconBuilding from "../data/images/wisata/icon/building.svg";
import "./styles/wisata.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';

const Trayek = () => {

    useEffect(() => {
        document.title = 'Trayek - Sipinter Ciamis'
    }, [])

    const renderItem = (itemTujuan) => {
        const tujuan = Array.isArray(itemTujuan) ? itemTujuan[0] : itemTujuan;

        return (
            <>
                {/* <ListGroup.Item className='ps-5'>{tujuan}</ListGroup.Item> */}

                {Array.isArray(itemTujuan)
                    ? itemTujuan
                        // .slice(1)
                        .map((name, index) => (
                            <ListGroup.Item className='ps-5 border-bottom-0'>{name}</ListGroup.Item>
                        ))
                    : <ListGroup.Item className='ps-5'>{tujuan}</ListGroup.Item>
                }
            </>
        );
    };

    return (
        <div>
            {/* START SECTION HERO */}
            <div
                className="d-flex justify-content-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Container className="d-flex justify-content-center flex-column align-items-center align-items-lg-start">
                    <div className="">
                        <h3 style={{ marginTop: "60px" }} className="text-white text-center text-lg-start">
                            Cari Trayek
                        </h3>
                        <p className="text-white mb-5">Sesuai tujuanmu disini</p>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        <div className="search-trayek-filter gap-3 col-md-6 col-12 py-4 mt-5 d-flex flex-lg-row flex-column justify-content-around align-items-center"
                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                marginBottom: "80px",
                            }}>
                            <div className="asal ms-3 d-flex flex-column align-items-start">
                                <span className='text-muted fw-bold'>Dari</span>
                                <div className="d-flex gap-2">
                                    <img
                                        src={iconBuilding}
                                        alt="icon"
                                        style={{ position: "", marginLeft: "" }}
                                    />
                                    <span>Ciamis</span>
                                </div>
                            </div>
                            <div className='tujuan ms-3 d-flex flex-column align-items-start bg-bg-warning'>
                                <span className='text-muted fw-bold'>Ke</span>
                                <div className="d-flex gap-2">
                                    <img
                                        src={iconBuilding}
                                        alt="icon"
                                        style={{ position: "", marginLeft: "" }}
                                    />
                                    <span>Ciamis</span>
                                </div>

                            </div>
                            {/* <div className="tujuan ms-lg-0 ms-3 d-flex align-items-center">
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
                            </div> */}

                        </div>
                    </div>
                    <div className='m-auto'>
                        <button
                            className="py-lg-3 px-4 py-2"
                            style={{
                                backgroundColor: "#FFBF00",
                                border: "none",
                                borderRadius: "10px",
                                color: "white",
                            }}
                        >Cari
                        </button>
                    </div>
                </Container>
            </div >
            {/* END SECTION HERO */}

            {/* START PETA RUTE TRAYEK */}
            <div className="mb-5" >
                <h1 className="text-center mt-5 mb-4">Peta Rute Trayek</h1>
                <Container className="pb-4" style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}>
                    <div className="d-flex justify-content-center align-items-center pb-5">
                        <div style={{ width: '70%' }}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper pb-2">
                                <SwiperSlide>
                                    <Card>
                                        <Card.Body><img src={petaTrayek1} alt='peta1' /></Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card>
                                        <Card.Body><img src={petaTrayek2} alt='peta2' /></Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card>
                                        <Card.Body><img src={petaTrayek3} alt='peta3' /></Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card>
                                        <Card.Body><img src={petaTrayek4} alt='peta4' /></Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
            {/* END SECTION PETA RUTE TRAYEK */}

            {/* START DAFTAR ANGKOT */}
            <div className="mb-5" >
                <h1 className="text-center mt-5 mb-4">Daftar Angkot Terminal Ciamis</h1>
                <Container className="mt-5 pb-4" style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}>
                    <div className="d-flex align-items-center pb-5 ">
                        <ListGroup className='w-100'>
                            {angkots.map((angkot) => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-semibold" style={{ color: '#690B51' }}>{angkot.nama}</div>
                                        <div className='text-muted'>{angkot.trayek}</div>
                                    </div>
                                    <Link to={`/trayek/${angkot.id}`} className='rounded-pill text-decoration-none py-2 px-4' style={{ backgroundColor: '#FFBF0026', color: '#FFBF00' }}>Lihat Detail</Link>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    </div>
                </Container>
            </div>
            {/* END SECTION DAFTAR ANGKOT */}

            {/* START DATA BUS */}
            <div className="mb-5">
                <h1 className="text-center mt-5 mb-4">Data Bus AKAP dan AKDP di Terminal Ciamis</h1>
                <Container className="mt-5 pb-4">
                    {/* START AKAP */}
                    <div className='p-3 rounded-2 text-white mb-3 fw-semibold' style={{ backgroundColor: '#690B51' }}>
                        BUS AKAP
                    </div>
                    <div className="row justify-content-center align-items-center mb-md-5">
                        <div className="col-11 col-md-6 overflow-auto mb-5 mb-md-0" style={{ height: '450px' }}>
                            <div className="border rounded p-2">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='fw-semibold' style={{ color: '#690B51' }}>AKAP Besar</ListGroup.Item>
                                    {AKAP.map((akap) => (
                                        <>
                                            {akap.besar.map((data) => (
                                                <>
                                                    <ListGroup.Item className='fw-semibold' style={{ borderBottomColor: 'rgba(185, 185, 185, 0.1)' }}>{data.namaPO}</ListGroup.Item>
                                                    {renderItem(data.tujuan)}
                                                    {/* <ListGroup.Item className='ps-5'>{data.tujuan}</ListGroup.Item> */}
                                                </>
                                            ))}
                                        </>
                                    ))}
                                </ListGroup>
                            </div>
                        </div>
                        <div className="col-11 col-md-6 overflow-auto" style={{ height: '450px' }}>
                            <div className="border rounded p-2">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='fw-semibold' style={{ color: '#690B51' }}>AKAP Sedang</ListGroup.Item>
                                    {AKAP.map((akap) => (
                                        <>
                                            {akap.sedang.map((data) => (
                                                <>
                                                    <ListGroup.Item className='fw-semibold' style={{ borderBottomColor: 'rgba(185, 185, 185, 0.1)' }}>{data.namaPO}</ListGroup.Item>
                                                    {renderItem(data.tujuan)}
                                                    {/* <ListGroup.Item className='ps-5'>{data.tujuan}</ListGroup.Item> */}
                                                </>
                                            ))}
                                        </>
                                    ))}
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                    {/* END AKAP */}

                    {/* START AKDP */}
                    <div className="mt-1">
                        <div className='p-3 rounded-2 text-white mb-3 fw-semibold' style={{ backgroundColor: '#690B51' }}>
                            BUS AKDP
                        </div>
                        <div className="row justify-content-center align-items-center mb-3">
                            <div className="col-11 col-md-6 overflow-auto" style={{ height: '450px' }}>
                                <div className="border rounded p-2">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className='fw-semibold' style={{ color: '#690B51' }}>AKDP Besar</ListGroup.Item>
                                        {AKDP.map((akdp) => (
                                            <>
                                                {akdp.besar.map((data) => (
                                                    <>
                                                        <ListGroup.Item className='fw-semibold' style={{ borderBottomColor: 'rgba(185, 185, 185, 0.1)' }}>{data.namaPO}</ListGroup.Item>
                                                        {renderItem(data.tujuan)}
                                                        {/* <ListGroup.Item className='ps-5'>{data.tujuan}</ListGroup.Item> */}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                            <div className="col-11 col-md-6 overflow-auto" style={{ height: '450px' }}>
                                <div className="border rounded p-2">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className='fw-semibold' style={{ color: '#690B51' }}>AKDP Sedang</ListGroup.Item>
                                        {AKDP.map((akdp) => (
                                            <>
                                                {akdp.sedang.map((data) => (
                                                    <>
                                                        <ListGroup.Item className='fw-semibold' style={{ borderBottomColor: 'rgba(185, 185, 185, 0.1)' }}>{data.namaPO}</ListGroup.Item>
                                                        {renderItem(data.tujuan)}
                                                        {/* <ListGroup.Item className='ps-5'>{data.tujuan}</ListGroup.Item> */}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END AKDP */}
                </Container>
            </div >
            {/* END DATA BUS */}
        </div >
    );
}

export default Trayek;
