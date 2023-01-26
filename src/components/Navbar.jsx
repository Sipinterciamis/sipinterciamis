import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex w-full px-40 py-7 items-center shadow-md">
            {/* <div className="container mx-auto"> */}
            <div className="navbar bg-white">
                <div className="flex-1">
                    <div className="flex-col">
                        <h1><Link className="normal-case text-3xl text-primary-purple-1 font-bold" to={'/'}>Sipinter</Link></h1>
                        <h4 className='text-base font-medium text-gray-2'>Sistem Informasi Manajemen Terminal Ciamis</h4>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='px-1'><Link className='text-lg font-bold text-primary-purple-1' to="/blog">
                            Info
                        </Link></li>
                        <li className='px-1'><Link className='text-lg font-bold text-gray-2' to="/contact">
                            Trayek
                        </Link></li>
                        <li className='px-1'><Link className='text-lg font-bold text-gray-2' to="/contact">
                            Wisata
                        </Link></li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
