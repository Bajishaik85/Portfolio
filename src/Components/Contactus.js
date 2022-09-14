import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



const SERVICE_ID = "service_wo48ue5";
const TEMPLATE_ID = "template_cp841sr";


function Contactus() {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,"Sg3flc_6XeqlNf6-h")
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <>

            <div id="contact" className="contact-area section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className='m-1 lead fs-2'>Get in Touch</h1>
                        <p>Want get in touch? Iam here to respond to your Queries.Send a query quickly and I will get in touch with you as early as possbile.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                            <div className="contact">
                                <form className="form" name="enq" onSubmit={handleOnSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="from_name" className="form-control m-1" placeholder="Name" required="required" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="from_email" class="form-control m-1" placeholder="Email" required="required" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <input type="text" name="from_subject" class="form-control m-1" placeholder="Subject" required="required" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="from_message" class="form-control m-1" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg m-1" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                            <div class="single_address">
                                <i class="fa fa-map-marker"></i>
                                <h4>My Address</h4>
                                <p>Guntur,Andhra Pradesh,India</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-envelope"></i>
                                <h4>Send your message</h4>
                                <p>bajishaikbsk@gmail.com</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-phone"></i>
                                <h4>Call Me On</h4>
                                <p>+91 8187036481</p>
                            </div>
                            <div class="single_address">
                                <i class="fa fa-clock-o"></i>
                                <h4>Available Time</h4>
                                <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Contactus
