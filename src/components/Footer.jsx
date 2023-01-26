import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto px-10 md:px-40 py-16 bg-primary-purple-1">
                <div>
                    <span className="text-2xl text-secondary-yellow-1 font-bold">Sipinter</span>
                    <Link className="text-base text-white font-normal">Info</Link>
                    <Link className="text-base text-white font-normal">Trayek</Link>
                    <Link className="text-base text-white font-normal">Tempat Wisata</Link>
                    <Link className="text-base text-white font-normal">Kritik & Saran</Link>
                </div>
                <div className='mr-40'>
                    <span className="text-2xl text-secondary-yellow-1 font-bold">Support</span>
                    <Link className="text-base text-white font-normal">Pusat Bantuan</Link>
                    <Link className="text-base text-white font-normal">Syarat & Ketentuan</Link>
                    <Link className="text-base text-white font-normal">Kebijakan Privasi</Link>
                </div>
                <div>
                    <span className="text-2xl text-secondary-yellow-1 font-bold">Alamat</span>
                    <Link className="text-base text-white font-normal">Jl. Letnan Samuji</Link>
                    <span className="text-2xl text-secondary-yellow-1 font-bold">Kontak</span>
                    <Link className="text-base text-white font-normal">(0265)774237</Link>
                </div>
            </footer>
            <div className='footer footer-center p-4 bg-primary-purple-1'>
                <p className='text-base text-white font-normal'>Copyright © 2023 - UPTD Terminal Ciamis</p>
            </div>
        </>
    )
}
