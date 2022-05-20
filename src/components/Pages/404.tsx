import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"

const Error404: React.FC = () => {
    return (
        <div className='hero' >
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className='text-6xl font-semibold mb-8' >
                        404
                    </h1>
                    <p className="text-5xl mb-8">
                        Page not found
                    </p>
                    <Link className='btn btn-primary btn-lg' to="/" >
                        <FaHome className='inline mr-2' />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error404