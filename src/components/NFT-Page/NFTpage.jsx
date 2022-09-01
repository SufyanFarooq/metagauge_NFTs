import React from 'react'
import './NFTpage.css';
import { Carousel } from 'react-bootstrap'
import GaugeChart from 'react-gauge-chart';
import Countdown from 'react-countdown';

export default function NFTpage() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>time is up</span>;
        } else {
            // Render a countdown
            return <span>
                <div className="container-fluid">
                    <div className="container">
                        <div className="maindiv">
                            <div className="card firdtcard smallcards">
                                <div className="card-header flexdiv">
                                    <div className="">
                                        Days
                                        <div className="card-body mt-2">
                                            <div className="card innercard innercarddivsm flexdiv">
                                                <div className="card-body">
                                                    <span className="h1text">{days}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">

                                            Hours
                                            <div className="card innercard mt-2">
                                                <div className="card-body">
                                                    <span className="h1text">{hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            Minutes
                                            <div className="card innercard mt-2">
                                                <div className="card-body">
                                                    <span className="h1text">{minutes}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            Seconds
                                            <div className="card innercard mt-2" >
                                                <div className="card-body">
                                                    <span className="h1text">{seconds}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="card firdtcard fulcards">
                                <div className="card-header flexdiv">
                                    <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        Days
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        Hours
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        Minutes
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        Seconds
                                    </div>
                                </div>
                                </div>


                                <div className="innerdivbody">
                                    <div className="row">
                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <span className="h1text">{days}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <span className="h1text">{hours}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <span className="h1text">{minutes}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard" >
                                                <div className="card-body">
                                                    <span className="h1text">{seconds}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></span>;
        }
    };
    return (
        <div className="NFTpage">
            <div className="container-fluid">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 ">
                            <div >
                                <Carousel className="sliderContainer">
                                    <Carousel.Item interval={1000}  >
                                        <img
                                            className="d-block  w-50 carouselimg"
                                            src="logo192.png"
                                            alt="First slide"

                                        />
                                        {/* <Carousel.Caption>
                                            <h3>First slide label</h3>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                        <img
                                            className="d-block w-50 carouselimg"
                                            src="logo192.png"
                                            alt="Second slide"
                                        />
                                        {/* <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-50 carouselimg"
                                            src="logo192.png"
                                            alt="Third slide"
                                        />
                                        {/* <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                        </div>


                        <div className="col-lg-3">
                            <div className="NFTpageList">
                                <ul>
                                    <li>12,000 limited editon NFTs only.</li>
                                    <li>Creating your own staking gorup and participate as the master of mining.</li>
                                    <li>Gurantee the highest 6th level of DAPP Staking reward.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-5">

                            <div className="dummy ">
                                <Countdown
                                    date={Date.now() + 172800000}
                                    renderer={renderer}
                                />
                                <GaugeChart id="gauge-chart3 " className="mt-2 "
                                    nrOfLevels={30}
                                    colors={["red", "#FF5F6D", "#FFC371"]}
                                    arcWidth={0.2}
                                    percent={0.71}
                                />
                                <div className="Speedometerbtn">

                                    <button className="btn btnBuy ">Buy</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <br /><br />
                </div>
            </div>

            {/* <div className="NFTpageContainer">

            </div> */}
        </div>
    )
}
