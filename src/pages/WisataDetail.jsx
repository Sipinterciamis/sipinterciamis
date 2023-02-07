import dataWisata from "../data/wisata"
import './styles/wisata.scss'
import { Card, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Maps from "../components/Maps"

const WisataDetail = () => {
    const { slug } = useParams();
    const [wisata, setWisata] = useState(null);

    useEffect(() => {
        const result = dataWisata.find(i => i.slug === slug);
        setWisata(result);
        document.title = 'Detail Wisata - SIPINTER Ciamis'
        // document.title = `${wisata.nama} - SIPINTER Ciamis`
    }, [slug]);

    return (
        <div className="detail-wisata mb-5">
            <Container>
                {wisata ? (
                    <>
                        <h2 className="mt-4 mb-lg-5 text-center fw-semibold mb-4">{wisata.nama}</h2>
                        <div className="row  justify-content-center gap-4">
                            <div className="col-11 col-md-5 ">
                                {/* <div className="d-flex flex-column col-md-9 col-12 w-100"> */}
                                <img className="img-fluid rounded-2" style={{ width: '100%', height: "auto", objectFit: "cover" }} src={wisata.imageUrl} alt={wisata.nama} />
                                <p className="text-center text-muted" style={{ fontStyle: "italic", fontWeight: "400" }}>Sumber: {wisata.source}</p>
                                {/* </div> */}
                            </div>
                            <div className="col-11 col-md-6  px-0">
                                <Card className="w-100">
                                    <Card.Body>
                                        <p className="fw-semibold">Lokasi:</p>
                                        <p>{wisata.lokasi}</p>

                                        <p className="fw-semibold">Peta Lokasi</p>
                                        <div style={{ width: '100%', height: '400px' }}>
                                            <Maps mapSrc={wisata.mapSrc} />
                                        </div>
                                        {/* <p className="text-center text-lg-start" style={{ color: "rgba(47, 26, 42, 1)", fontSize: "24px", fontWeight: "700" }}>Trayek</p>
                            <div className="list-trayek">
                                <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                    <div style={{ width: "fit-content" }}>
                                        <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                        <div className="d-flex flex-row gap-2">
                                            <img src={routing} alt="" />
                                            <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                                        </div>
                                    </div>
                                    <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                                </div>
                                <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                    <div style={{ width: "fit-content" }}>
                                        <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                        <div className="d-flex flex-row gap-2">
                                            <img src={routing} alt="" />
                                            <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                                        </div>
                                    </div>
                                    <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                                </div>
                                <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                    <div style={{ width: "fit-content" }}>
                                        <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                        <div className="d-flex flex-row gap-2">
                                            <img src={routing} alt="" />
                                            <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                                        </div>
                                    </div>
                                    <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                                </div>
                                <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                    <div style={{ width: "fit-content" }}>
                                        <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                        <div className="d-flex flex-row gap-2">
                                            <img src={routing} alt="" />
                                            <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                                        </div>
                                    </div>
                                    <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                                </div>
                                <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom: "1px solid #B9B9B9D9" }}>
                                    <div style={{ width: "fit-content" }}>
                                        <p className="mb-2" style={{ color: "#690B51", fontWeight: "700" }}>Angkot 1</p>
                                        <div className="d-flex flex-row gap-2">
                                            <img src={routing} alt="" />
                                            <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                                        </div>
                                    </div>
                                    <p className="px-3 py-1 mb-0 routing" style={{ fontWeight: "500", color: "#FFBF00", backgroundColor: "#FFBF0026", borderRadius: "50px", width: "fit-content" }}>Lihat Detail</p>
                                </div>
                            </div> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </>

                    // {/* <Container>
                    //     <p className="mt-4 mb-lg-5 text-center title">Peta Lokasi</p>
                    //     <div className="d-flex justify-content-center p-2">
                    //         <div style={{ width: '100%', height: '400px' }}>
                    //             <Maps mapSrc={wisata.mapSrc} />
                    //         </div>
                    //         <img className="img-fluid col-md-7 p-3 mb-5" src={peta} alt="" style={{ border: "#B9B9B9D9", boxShadow: "0px 2px 4px 0px #00000040", borderRadius: "10px" }} />
                    //     </div>
                    // </Container> */}
                ) : (<p>Data Tidak Ditemukan</p>)}
            </Container>
        </div>
    );
}

export default WisataDetail;