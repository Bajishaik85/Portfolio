
import React from 'react'
import Typewriter from "typewriter-effect";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function Banner() {


    return (
        <>
        

            <div className="container my-5">
                <div className="row bg-1 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">




                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 p-3 p-lg-5 pt-lg-3 order-2 order-sm-2 order-md-2 order-lg-1 order-xl-1 order-xxl-s">
                        <h1 className='text-start text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start' >Hello Iam Shaik Baji</h1>
                        <h6 className="display-4 fs-2 text-primary fw-bold lh-1 text-start text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start"><Typewriter

                            onInit={(typewriter) => {


                                typewriter

                                    .typeString(`Hi Iam a <strong>Front-End Web Developer</strong>`)

                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Welcome To My Website")
                                    .start();
                            }}
                        /></h6>
                        <h6 className="lead mt-3 fs-4 text-start text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">Seeking a role as a front-end Developer so I can use my thorough knowledge of programming frameworks and development software</h6>
                        <div className='d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start'>
                            <a className="text-primary link-success m-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bajishaik85"><LinkedInIcon /></a>
                            <a className="text-primary link-success m-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alwaysbajishaik"><FacebookIcon /></a>
                            <a className="text-primary link-success m-2" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/always_bajishaik"><InstagramIcon /></a>
                            <a className="text-primary link-success m-2" href="mailTo:bajishaikbsk@gmail.com"><MarkEmailReadIcon /></a>
                            <a className="text-primary link-success m-2" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/always_bajishaik"><TwitterIcon /></a>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start  mb-4 mb-lg-3">
                            <a href="https://drive.google.com/file/d/1iqhTLFJPcVp6hrc9uO2_HCEJnXGtX8oy/view?usp=sharing" rel="noopener noreferrer" download="Baji's Resume" target='_blank'>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Download Resume</button></a>
                            <Link to="/contact" type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Hire Me</Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 order-1 order-sm-1 order-md-1 order-lg-2 order-xl-2 order-xxl-2 d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                        <img src="https://i.ibb.co/YtKSkqN/Profile-img.png" className="img-fluid" alt="img" />
                    </div>
                </div>
            </div>



        </>
    )

}

export default Banner
