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
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </>
                ) : (<p>Data Tidak Ditemukan</p>)}
            </Container>
        </div>
    );
}

export default WisataDetail;