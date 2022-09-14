import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg" >
                <div className="container-fluid d-flex" >
                    <Link to="/" className="navbar-brand">Baji Shaik</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-left" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active fw-semibold text-white link-warning" aria-current="page">Home</Link>
                            <Link to="/skills" className="nav-link fw-semibold text-white link-warning">Skills</Link>
                            <Link to="/about" className="nav-link fw-semibold text-white link-warning " >About</Link>
                            <Link to="/education" className="nav-link fw-semibold text-white link-warning">Education</Link>
                            <Link className="nav-link nav-link fw-semibold text-white link-warning" to="/contact">Contact</Link>


                        </div>

                    </div>
                    
                </div>
            </nav>


            






        </>
    )
}
