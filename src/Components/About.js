import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function About() {
    
    return (
        <>
            <div className='container-fluid bg-primary mt-2 p-3'>
                <div className='container bg-white rounded '>
                    <div className="container text-center pt-2 ">
                        <div className="row ">
                            <h4 className='text-primary fs-3'>My Skills</h4>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-12 my-auto ">

                                <img src="https://i.ibb.co/wRskBR2/skills.jpg" class="img-fluid" alt="..." />

                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-12">
                                <ul className="list-group m-3 mx-auto">




                                    <li className="list-group-item bg-warning list-group-item-primary "><h6>Html</h6>
                                        <ProgressBar completed={80} animateOnRender="true" customLabel="80%" />

                                    </li>
                                    <li className="list-group-item bg-warning list-group-item-primary "><h6>Css</h6>
                                        <ProgressBar completed={75} animateOnRender="true" customLabel="75%" />

                                    </li><li className="list-group-item bg-warning list-group-item-primary "><h6>Javascript</h6>
                                        <ProgressBar completed={62} animateOnRender="true" customLabel="62%" />

                                    </li>
                                    <li className="list-group-item bg-warning list-group-item-primary "><h6>React Js</h6>
                                        <ProgressBar completed={56} animateOnRender="true" customLabel="56%" />

                                    </li>
                                    <li className="list-group-item bg-warning list-group-item-primary "><h6>Python</h6>
                                        <ProgressBar completed={77} animateOnRender="true" customLabel="77%" />

                                    </li>




                                </ul>




                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default About
