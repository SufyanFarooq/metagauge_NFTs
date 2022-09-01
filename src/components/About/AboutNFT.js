import React from 'react'
import './AboutStyle.css';
import ReactPlayer from 'react-player/youtube'
import Chart from '../Chart/Chart'
import Typical from 'react-typical'
import { Carousel } from 'react-bootstrap'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';

function AboutNFT() {
    return (
        <div id='About'>
            <div className="container-fluid aboutpadingdiv AboutNFTpage">
                <div className="container">
                    <div className="maindivabout ">

                        <div className="row ">

                            <div className="headingdiv mt-5">
                                <h1 className="mainHeading "> ABOUT US</h1>


                                {/* <h1 className="mainHeading ">About</h1> */}
                            </div>

                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <p className="colaboutheading1 " style={{ marginTop: '2.8rem' }}>
                                    Meta Gauge is a project that builds a personalization platform for personal movement data in
                                    blockchain-based virtual reality. Vehicles, airplanes through Gauge Dapp. You can start mining by
                                    creating movement data such as walking, etc. The created movement data is owned by the user, so
                                    you can build a road based on the movement
                                    data created by the user in the virtual space of the gauge platform.
                                </p>
                                <p className="colaboutheading1 mt-5">
                                    In addition, it is possible to reproduce the road and surrounding buildings
                                    linked with the real basis of the mobile data route as it is, and by creating virtual buildings,
                                    you can freely create contents such as
                                    advertisements, games, movies, markets, and logistics to generate profits. There is. In addition,
                                    creations can be converted into NFTs on the blockchain and participate in NFT market transactions within
                                    the gauge platform.
                                </p>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-3">


<div className="sliderabout">
<Carousel className='slidermaindivhere'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="01.png"
      alt="First slide"
    />
   
    
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="02.png"
      alt="Second slide"
    />

   
      
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="03.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="04.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="05.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="06.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
</div>


                                <div className="Cardsdivabout">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="01.png" width="100%" alt=""  className='Indeximg' />
                                            </div>


                                        </div>

                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="02.png" width="100%"  alt="" />
                                            </div>


                                        </div>
                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="03.png" width="100%"  alt="" />
                                            </div>


                                        </div>
                                    </div>



                                    <div className="row ">
                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="04.png" width="100%" alt="" />
                                            </div>


                                        </div>

                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="05.png" width="100%"  alt="" />
                                            </div>


                                        </div>
                                        <div className="col-lg-4">
                                            <div className="cardimg1">
                                                <img src="06.png" width="100%"  alt="" />
                                            </div>


                                        </div>
                                    </div>






                                </div>





                            </div>
                        </div>
                    </div>


                    <br /><br />



                </div>
            </div>



            <div className="container-fluid  tokenpaddingdiv Innertokendiv" id='Token' >
                <div className="container">
                    <div className="tokensection">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="tokentext mt-5">
                                   
                                    <h1 className="tokentext text-white">TOKENOMICS</h1>
                                    <div className="innertextdivtoken">
                                        <p >Token Name: GAUGE COIN</p>
                                        <p>Symbol: GAUGE</p>
                                        <p>Total Supply: 10,000,000,000,000</p>
                                        <p>Decimals: 9</p>
                                        <p>Contract Address: <a target="_blank" href='https://bscscan.com/token/0x2042bFCACf2Edb5525699356415258CB0c1eB2F6' className='linkcontract'>0x20...B2F6 </a>  </p>
                                      


                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6 col-sm-12 col-12" >
                                <div className="chartdiv">

                               
                                    <img src="graph3.png" alt="" width="100%" className='Chartimg' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />
            </div>

        </div>
    )
}

export default AboutNFT
