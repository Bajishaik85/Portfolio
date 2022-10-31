import React from 'react'

function Mysection() {
    return (
        <>
            <div className='container-fluid bg-primary mt-2 p-3'>
                <div className='container bg-white rounded '>
                    <div className="container text-center pt-2 ">
                        <div className="row ">
                            <h3 className='text-primary fs-3 m-2'>Who Am I</h3>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                                <img src="https://i.ibb.co/VCRRBg7/In-Shot-20220902-223008873.jpg" className="img-thumbnail mb-2" alt="..." />

                            </div>
                            <div className="col-12 col-sm-12 colmd-12 col-lg-6 col-xl-6 col-xxl-6">
                                <p className='fs-4 lead text-start text-sm-start text-md-start text-lg-start text-xl-start text-xxl- overflow-auto'>Iam a Web Developer specialized in Front End Development Experienced with all stages of the development cycle for dynamic web pages.Well versed in numerous trending technologies including Html,Css,Bootstrap,Javascript and Python.I had a strong background in project management and customer relations.</p>
                                <h3 className='text-primary'>Here Are Few Highlights</h3>
                                <div class="list-group">
                                    <a href={() => false} class="list-group-item list-group-item-action">Visual Thinking</a>
                                    <a href={() => false} class="list-group-item list-group-item-action">Problem Solving</a>
                                    <a href={() => false} class="list-group-item list-group-item-action">Organization Skills</a>
                                    <a href={() => false} class="list-group-item list-group-item-action ">Communication Skills</a>
                                    <a href={() => false} class="list-group-item list-group-item-action mb-1">Enthusiastic Debugging</a>

                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Mysection
