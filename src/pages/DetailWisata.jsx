import bangku from "../data/images/detailWisata/bangku.png"
import routing from "../data/images/detailWisata/routing.png"
import peta from "../data/images/detailWisata/peta.png"
import './styles/style.scss'
import { Container } from "react-bootstrap"

const DetailWisata = () => {
    return ( 
        <div className="detail-wisata">
            <p className="mt-4 mb-lg-5 text-center title">Puncak Bangku Ciamis</p>
            <div className="row detail-wisata-header justify-content-center">
                <div className="col-md-7 col-11 d-flex ">
                    <div className="d-flex flex-column col-md-9 col-12">
                    <img style={{ heigh:"auto", objectFit:"contain" }} src={bangku} alt="" />
                    <p className="text-center" style={{ fontSize:"16px", fontStyle:"italic",fontWeight:"400",color:"rgba(142, 142, 142, 1)" }}>Sumber: salwawisata.com</p>
                    </div>
                </div>
                <div className="col-md-5 col-11 px-0">
                <p className="text-center text-lg-start" style={{ color:"rgba(47, 26, 42, 1)", fontSize:"24px", fontWeight:"700" }}>Trayek</p>
                    <div className="list-trayek">
                        <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom:"1px solid #B9B9B9D9" }}>
                            <div style={{ width:"fit-content" }}>
                            <p className="mb-2" style={{ color:"#690B51", fontWeight:"700" }}>Angkot 1</p>
                            <div className="d-flex flex-row gap-2">
                                <img src={routing} alt="" />
                                <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                            </div>
                            </div>
                            <p className="px-3 py-1 mb-0 routing" style={{fontWeight:"500", color:"#FFBF00", backgroundColor:"#FFBF0026", borderRadius:"50px",width:"fit-content" }}>Lihat Detail</p>
                        </div>
                        <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom:"1px solid #B9B9B9D9" }}>
                            <div style={{ width:"fit-content" }}>
                            <p className="mb-2" style={{ color:"#690B51", fontWeight:"700" }}>Angkot 1</p>
                            <div className="d-flex flex-row gap-2">
                                <img src={routing} alt="" />
                                <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                            </div>
                            </div>
                            <p className="px-3 py-1 mb-0 routing" style={{fontWeight:"500", color:"#FFBF00", backgroundColor:"#FFBF0026", borderRadius:"50px",width:"fit-content" }}>Lihat Detail</p>
                        </div>
                        <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom:"1px solid #B9B9B9D9" }}>
                            <div style={{ width:"fit-content" }}>
                            <p className="mb-2" style={{ color:"#690B51", fontWeight:"700" }}>Angkot 1</p>
                            <div className="d-flex flex-row gap-2">
                                <img src={routing} alt="" />
                                <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                            </div>
                            </div>
                            <p className="px-3 py-1 mb-0 routing" style={{fontWeight:"500", color:"#FFBF00", backgroundColor:"#FFBF0026", borderRadius:"50px",width:"fit-content" }}>Lihat Detail</p>
                        </div>
                        <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom:"1px solid #B9B9B9D9" }}>
                            <div style={{ width:"fit-content" }}>
                            <p className="mb-2" style={{ color:"#690B51", fontWeight:"700" }}>Angkot 1</p>
                            <div className="d-flex flex-row gap-2">
                                <img src={routing} alt="" />
                                <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                            </div>
                            </div>
                            <p className="px-3 py-1 mb-0 routing" style={{fontWeight:"500", color:"#FFBF00", backgroundColor:"#FFBF0026", borderRadius:"50px",width:"fit-content" }}>Lihat Detail</p>
                        </div>
                        <div className="row justify-content-between align-items-center px-4 py-3" style={{ borderBottom:"1px solid #B9B9B9D9" }}>
                            <div style={{ width:"fit-content" }}>
                            <p className="mb-2" style={{ color:"#690B51", fontWeight:"700" }}>Angkot 1</p>
                            <div className="d-flex flex-row gap-2">
                                <img src={routing} alt="" />
                                <p className="mb-0 routing" >CIAMIS - CISEPET - KARANGAMPEL</p>
                            </div>
                            </div>
                            <p className="px-3 py-1 mb-0 routing" style={{fontWeight:"500", color:"#FFBF00", backgroundColor:"#FFBF0026", borderRadius:"50px",width:"fit-content" }}>Lihat Detail</p>
                        </div>
                    </div>
                </div>
            </div>

<Container>
            <p className="mt-4 mb-lg-5 text-center title">Peta Lokasi</p>
            <div className="d-flex justify-content-center">
            <img className="img-fluid col-md-7 p-3 mb-5" src={peta} alt="" style={{border:"#B9B9B9D9", boxShadow:"0px 2px 4px 0px #00000040", borderRadius:"10px" }}/>
            </div>
</Container>
        </div>
     );
}
 
export default DetailWisata;