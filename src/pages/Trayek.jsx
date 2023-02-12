import { useEffect } from 'react';
import { Card, Container, ListGroup, Table } from 'react-bootstrap';
import angkots from '../data/angkot'
import AKAP from '../data/AKAP';
import AKDP from '../data/AKDP';
import petaTrayek1 from '../data/images/trayek/angkot-angdes.jpg'
import petaTrayek2 from '../data/images/trayek/trayek-au-ciamis.png'
import petaTrayek3 from '../data/images/trayek/zona-trayek-au-1.jpg'
import petaTrayek4 from '../data/images/trayek/zona-trayek-au.jpg'
import routing from "../data/images/detailWisata/routing.png"

import background from "../data/images/wisata/wisata.png";
import "./styles/trayek.scss"

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
        document.title = 'Trayek - SIPINTER Ciamis'
    }, [])

    const renderItem = (id, itemTrayek, itemNamaPO, itemWaktu) => {
        const waktu = Array.isArray(itemWaktu) ? itemWaktu[0] : itemWaktu;

        return (
            <>
                <tr>
                    {Array.isArray(itemWaktu) ? (
                        <>
                            <td rowSpan={itemWaktu.length} style={{ verticalAlign: 'middle' }} className='text-center'>{id}</td>
                            <td rowSpan={itemWaktu.length} style={{ verticalAlign: 'middle' }}>{itemTrayek}</td>
                            <td rowSpan={itemWaktu.length} style={{ verticalAlign: 'middle' }}>{itemNamaPO}</td>
                            <td className='text-center'>{waktu}</td>
                        </>
                    ) : (
                        <>
                            <td className='text-center'>{id}</td>
                            <td>{itemTrayek}</td>
                            <td>{itemNamaPO}</td>
                            <td className='text-center'>{waktu}</td>
                        </>
                    )}
                </tr>
                {Array.isArray(itemWaktu)
                    ? itemWaktu
                        .slice(1)
                        .map((item, index) => (
                            <tr key={index}>
                                <td className='text-center'>{item}</td>
                            </tr>
                        ))
                    : null
                }
            </>
        );
    };

    return (
        <div className='trayek'>
            {/* START SECTION HERO */}
            <div
                className="d-flex justify-content-center"
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
            >
                <Container className="d-flex justify-content-center flex-column align-items-center align-items-lg-start">
                    <div className="text-center w-100 judul-header">
                        <h1 className="text-white fw-semibold">
                            Temukan Info Trayek
                        </h1>
                        <p className="text-white">
                            Cari info trayek angkot dan bus disini
                        </p>
                    </div>
                </Container>
            </div >
            {/* END SECTION HERO */}

            {/* START PETA RUTE TRAYEK */}
            <div className="mb-5" >
                <h2 className="text-center mt-5 mb-4 fw-semibold">Peta Rute Trayek</h2>
                <Container className="pb-4" style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}>
                    <div className="d-flex justify-content-center align-items-center pb-5">
                        {/* <div style={{ width: '100%' }}> */}
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <Card className='w-75'>
                                    <Card.Body><img src={petaTrayek1} alt='peta1' /></Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='w-75'>
                                    <Card.Body><img src={petaTrayek2} alt='peta2' /></Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='w-75'>
                                    <Card.Body><img src={petaTrayek3} alt='peta3' /></Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='w-75'>
                                    <Card.Body><img src={petaTrayek4} alt='peta4' /></Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                        {/* </div> */}
                    </div>
                </Container>
            </div>
            {/* END SECTION PETA RUTE TRAYEK */}

            {/* START DAFTAR ANGKOT */}
            <div className="mb-5 px-4 px-md-0 data-angkot">
                <h2 className="text-center mt-5 mb-4 fw-semibold">Daftar Angkot Terminal Ciamis</h2>
                <Container className="pb-3" style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}>
                    {/* <div className="list-trayek">
                        {angkots.map((angkot) => (
                            <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                <div style={{ width: "fit-content" }}>
                                    <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                    <div className="d-flex flex-row gap-2">
                                        <img src={routing} alt="" />
                                        <p className="mb-0 routing">{angkot.trayek}</p>
                                    </div>
                                </div>
                                <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                            </div>
                        ))}
                    </div> */}

                    <div className="d-flex align-items-center pb-5 ">
                        <ListGroup className='w-100'>
                            {angkots.map((angkot) => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2">
                                        <div className="fw-semibold" style={{ color: '#690B51' }}>
                                            <p className='mb-0'>
                                                {angkot.nama}
                                            </p>
                                        </div>
                                        <div className='text-muted rute'><img src={routing} alt="" /> <small>
                                            {angkot.trayek}
                                        </small>
                                        </div>
                                    </div>
                                    <Link to={`/trayek/${angkot.id}`} className='trayek__detail-btn rounded-pill text-decoration-none' >Lihat Detail</Link>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    </div>
                </Container>
            </div >
            {/* END SECTION DAFTAR ANGKOT */}

            {/* START DATA BUS */}
            <div className="mb-5 px-4 px-md-0">
                <Container className="mt-5 pb-4 bus">
                    <h2 className="text-center mt-5 mb-4 fw-semibold">Data Bus AKAP dan AKDP di Terminal Ciamis</h2>
                    {/* START AKAP */}
                    <div className='p-3 rounded-2 text-white mb-3 fw-semibold bus__kategori'>
                        BUS AKAP
                    </div>
                    <div className="row justify-content-center align-items-start mb-md-5">
                        <div className="col-12 col-md-6 overflow-auto mb-3 mb-md-0 border-bottom" style={{ height: '450px' }}>
                            <Table bordered hover size="sm">
                                <thead className='' style={{ position: 'sticky', top: '0' }}>
                                    <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                        <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                        <th id='akap-besar' className='fw-semibold' colSpan={4}>AKAP Besar</th>
                                    </tr>
                                    <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                        <th></th>
                                        <th headers='akap-besar' className='fw-semibold' style={{ width: 'auto' }}>Trayek</th>
                                        <th headers='akap-besar' className='fw-semibold' style={{ width: 'auto' }}>Nama PO</th>
                                        <th headers='akap-besar' className='fw-semibold' style={{ width: 'auto' }}>Waktu *</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AKAP.map(akap => (
                                        <>
                                            {akap.besar.map((data) => (
                                                <>
                                                    {renderItem(data.id, data.trayek, data.namaPO, data.waktu)}
                                                </>
                                            ))}
                                        </>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-12 col-md-6 overflow-auto mb-3" style={{ height: '300px' }}>
                            <Table bordered hover size="sm">
                                <thead style={{ position: 'sticky', top: '0' }}>
                                    <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                        <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                        <th id='segmen-berangkat' className='fw-semibold' colSpan={4}>AKAP Sedang</th>
                                    </tr>
                                    <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                        <th></th>
                                        <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Trayek</th>
                                        <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Nama PO</th>
                                        <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Waktu *</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AKAP.map(akap => (
                                        <>
                                            {akap.sedang.map((data) => (
                                                <>
                                                    {renderItem(data.id, data.trayek, data.namaPO, data.waktu)}
                                                </>
                                            ))}
                                        </>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    {/* END AKAP */}

                    {/* START AKDP */}
                    <div className="mt-1">
                        <div className='p-3 rounded-2 text-white mb-3 fw-semibold bus__kategori'>
                            BUS AKDP
                        </div>
                        <div className="row justify-content-center align-items-center mb-3">
                            <div className="col-12 col-md-6 overflow-auto mb-3 mb-md-0 border-bottom" style={{ height: '450px' }}>
                                <Table bordered hover size="sm">
                                    <thead style={{ position: 'sticky', top: '0' }}>
                                        <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                            <th id='segmen-berangkat' className='fw-semibold' colSpan={4}>AKDP Besar</th>
                                        </tr>
                                        <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th></th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Trayek</th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Nama PO</th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Waktu *</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AKDP.map(akdp => (
                                            <>
                                                {akdp.besar.map((data) => (
                                                    <>
                                                        {renderItem(data.id, data.trayek, data.namaPO, data.waktu)}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-12 col-md-6 overflow-auto border-bottom" style={{ height: '450px' }}>
                                <Table bordered hover size="sm">
                                    <thead style={{ position: 'sticky', top: '0' }}>
                                        <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                            <th id='segmen-berangkat' className='fw-semibold' colSpan={4}>AKDP Sedang</th>
                                        </tr>
                                        <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th></th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Trayek</th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Nama PO</th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: 'auto' }}>Waktu *</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AKDP.map(akdp => (
                                            <>
                                                {akdp.sedang.map((data) => (
                                                    <>
                                                        {renderItem(data.id, data.trayek, data.namaPO, data.waktu)}
                                                    </>
                                                ))}
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/* END AKDP */}

                    <div>
                        <small className='text-muted'><span className='text-danger'>*</span> Keberangkatan tentantif tergantung dari masing-masing PO</small>
                    </div>
                </Container>
            </div >
            {/* END DATA BUS */}
        </div >
    );
}

export default Trayek;
