import { Card, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import angkots from '../data/angkot';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function TrayekDetail() {
    const { idAngkot } = useParams();
    const [dataAngkot, setDataAngkot] = useState(null);

    useEffect(() => {
        const result = angkots.find(i => i.id === parseInt(idAngkot));
        setDataAngkot(result);
    }, [idAngkot]);

    const renderItem = (id, itemAsal, itemTujuan) => {
        const asal = Array.isArray(itemAsal) ? itemAsal[0] : itemAsal;
        const tujuan = Array.isArray(itemTujuan) ? itemTujuan[0] : itemTujuan;

        return (
            <>
                <tr>
                    <td>{id}</td>
                    <td>{asal}</td>
                    <td>{tujuan}</td>
                </tr>
                {Array.isArray(itemAsal)
                    ? itemAsal
                        .slice(1)
                        .map((name, index) => (
                            <tr key={index}>
                                <td></td>
                                <td>{name}</td>
                                {Array.isArray(itemTujuan)
                                    ? itemTujuan
                                        .slice(1)
                                        .map((name, index) => (
                                            <td key={index}>{name}</td>
                                        ))
                                    : null
                                }
                            </tr>
                        ))
                    : null
                }
            </>
        );
    };

    return (
        <div>
            {dataAngkot ? (
                <Container className='mt-5'>
                    <Link to={'/trayek'} className="btn text-white" style={{ backgroundColor: '#FFBF00' }}>Kembali</Link>
                    <section className='mb-5 mt-3'>
                        <div className='text-center mb-2'>
                            <h1>{dataAngkot.nama}</h1>
                            <p className='text-muted'>{dataAngkot.trayek}</p>
                        </div>
                        <div className="pb-4" style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.4)" }}>
                            <div className="d-flex justify-content-center align-items-center pb-5">
                                <div style={{ width: '70%' }}>
                                    <Card>
                                        <Card.Body style={{ height: '500px' }}><img src={dataAngkot.imageUrl} alt='foto' className='w-100' style={{ height: '100%', objectFit: 'cover' }} /></Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        {/* <Container> */}
                        <h1 className='text-center mb-4'>Trayek</h1>
                        <div className="row justify-content-center w-100">
                            <div className="col-12 col-md-6 mb-4">
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                            <th id='segmen-berangkat' className='fw-semibold' colSpan={2}>Segmen Berangkat</th>
                                        </tr>
                                        <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th></th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: '45%' }}>Asal</th>
                                            <th headers='segmen-berangkat' className='fw-semibold' style={{ width: '45%' }}>Tujuan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataAngkot.segmenBerangkat.map(data => (
                                            <>
                                                {renderItem(data.id, data.asal, data.tujuan)}
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-12 col-md-6 mb-4">
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr className='text-center text-white text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th className='fw-semibold' style={{ width: '10%' }}>No</th>
                                            <th id='segmen-kembali' className='fw-semibold' colSpan={2}>Segmen Kembali</th>
                                        </tr>
                                        <tr className='text-center text-white fw-semibold text-uppercase' style={{ backgroundColor: '#690B51' }}>
                                            <th></th>
                                            <th headers='segmen-kembali' className='fw-semibold' style={{ width: '45%' }}>Asal</th>
                                            <th headers='segmen-kembali' className='fw-semibold' style={{ width: '45%' }}>Tujuan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataAngkot.segmenKembali.map(data => (
                                            <>
                                                {renderItem(data.id, data.asal, data.tujuan)}
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        {/* </Container> */}
                    </section>
                </Container>
            ) : (<p>Data Tidak Ditemukan</p>)}
        </div>
    )
}

export default TrayekDetail