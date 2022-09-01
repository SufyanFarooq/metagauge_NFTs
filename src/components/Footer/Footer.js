import React from 'react'
import './Footer.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import logo from '../../assests/logo.png'
function Footer() {
    return (
        <div className='footerdivcolor'>
            <div className="container-fluid ">
                <div className="container">
                    {/* <div className="maindiv ">




                        <br /><br />

                        <div className="respmaindiv">
                            <div className="">
                                <div className="Linkdiv">
                                    <div className="respnavlink">
                                        <p>Home</p>
                                        <p>About</p>
                                        <p>NFT Card</p>
                                        <p>Tokenomics</p>
                                        <p>Feature</p>
                                        <p>RoadMap</p>

                                    </div>
                                </div>



                                <div className="">
                                    <div className="SocialIConresp ">
                                        <span className="IconB1  " >  <AiOutlineMail /></span><br /><br />
                                        <span className="IconB mt-5"> <BsTwitter /></span><br /><br />
                                        <span className="IconB "> <FaTelegramPlane /></span><br /><br />



                                    </div>
                                </div>
                            </div>


                        </div>
                    </div> */} <br />
                    <div className="Footerimg">

                        <img src={logo} width="100px" className='footerimglarge' />
                    </div>

                    <div className="checkdiv">

                        <div className="Linkdiv">

                            <div className="innerLinkDiv">

                             <a href="#homepage"><p className='link'>HOME</p></a>   
                              <a href="#NFT"> <p className='link'> NFT CARD</p></a>  
                             <a href="#About"><p className='link'>ABOUT</p></a>   
                             <a href="#Token"> <p className='link'> TOKENOMICS</p></a>  
                             <a href="#feature"><p className='link'>FEATURES</p></a>   
                             <a href="#Roadmap"><p className='link'>ROADMAP</p> </a>   
                              <a href="#Whitpaper"> <p className='link'>WHITEPAPER</p></a> 
                            </div>

                        </div>

                    </div>

                    <div className="footericon">
                        <div className="innericon">
                           <a  href="#"    ><span className="IconB  " disabled='true' > <AiOutlineMail /></span></a> 
                         <a  href="#" disabled='true'>  <span className="IconB "> <BsTwitter  /></span></a> 
                         <a  href="#"  disabled='true' ><span className="IconB "> <FaTelegramPlane  /></span></a>   
                        </div>
                    </div>




                </div>

                <div className="foter-footer">

                </div>
            </div>


            <div className="FooterCopy container-fluid">

                <p className="FooterCopyP">Copyright © 2021 - META GAUGE</p>
                <p className="FooterCopyP">All Rights Reserved</p>
            </div>



        </div>

    )
}

export default Footer
