import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import MarkEmailRead from '@mui/icons-material/MarkEmailRead';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>

            <div className="container-fluid bg-primary">
                <footer className="py-3 my-4 border-top">

                    <ul className="justify-content-center mx-auto list-unstyled d-flex">
                        <li className="ms-3"><a className="text-white link-warning" target="__blank" href="https://www.linkedin.com/in/bajishaik85"><LinkedInIcon/></a></li>
                        <li className="ms-3"><a className="text-white link-warning" target="__blank" href="https://www.facebook.com/alwaysbajishaik"><FacebookIcon/></a></li>
                        <li className="ms-3"><a className="text-white link-warning" target="__blank" href="https://www.instagram.com/always_bajishaik"><Instagram /></a></li>
                        <li className="ms-3"><a className="text-white link-warning"  href="mailTo:bajishaikbsk@gmail.com"><MarkEmailRead /></a></li>
                        <li className="ms-3"><a className="text-white link-warning" target="__blank" href="https://www.twitter.com/always_bajishaik"><TwitterIcon /></a></li>
                    </ul>
                    <a><p className="text-center text-white link-warning">Baji Shaik</p></a>
                    <a><p className="text-center text-white link-warning">Front-end Web Developer</p></a>
                    <a><p className="text-center text-white link-warning">Terms Of Usage & Privacy Policy</p></a>
                    <a><p className="text-center text-white link-warning mt-2">©Baji Shaik</p></a>



                </footer>

            </div>

        </>
    )
}

export default Footer
