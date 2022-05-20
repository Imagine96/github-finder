import React from 'react'
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Props {
    title: string
}

const Navbar: React.FC<Props> = ({ title }) => {
    return (
        <nav className='navbar shadow-md bg-neutral text-gray-50' >
            <div className='container mx-auto'>
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link className='text-lg align-middle' to="/" >
                        {title}
                    </Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link className='btn btn-ghost btn-sm' to="/" >
                            Home
                        </Link>
                        <Link className='btn btn-ghost btn-sm' to="/about" >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar