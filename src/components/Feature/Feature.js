import React from 'react'
import './Featurestyle.css'
import Typical from 'react-typical'
import { FaBeer } from 'react-icons/fa'

function Feature() {
    return (
        <div id='feature'>
            <div className="container-fluid featurepadingdiv FeaturebgColor">
                <div className="container">
                    <div className="maindivoffeture ">

                        <div className="row">
                            <div className="">
                                <br />
                                <h1 className="text-white text-center mt-5 Featureheadingaa ">FEATURE</h1>

                                {/* <Typical className="FEATURE "
                                    steps={['FEATURE', 3000, '', 2000]}
                                    loop={Infinity}
                                    wrapper="p"
                                /> */}
                            </div>
                            <div className="col-lg-6 mt-5" >
                                <div className="maincarddiv">
                                    <div className="card carddivborder">


                                        <div className="card-body cardtextb">
                                            <div className=" mobileicon">
                                                <i class="fas fa-mobile-alt  "></i>
                                            </div>
                                            <h2 className="text-white mt-3 text-center cardheadingmaininnersub ">Mobile Data Mining</h2>
                                           

                                            <ul className='ulcard'>
                                                <li className='ullipsection'>You can mine gauge coins that are proportional to the distance traveled,</li>
                                                <li className='ullipsection'>the number of moves, and the moving time,
                                                regardless of the user's vehicle, airplane, ship, or walking method.</li>
                                                <li className='ullipsection'>the more moves you take the more you  earn token.</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div className="col-lg-6 mt-5" >
                                <div className="maincarddiv2">
                                    <div className="card carddivborder">
                                        <div className=" mobileicon mt-4">
                                            <i class="fal fa-newspaper"></i>
                                        </div>

                                        <div className="card-body cardtextb">
                                            <h2 className="text-white text-center cardheadingmaininnersub ">NFT</h2>
                                            {/* <p className="cardinnertextp">12,000 Limited- <br />  </p>
                                            <p className="cardinnertextp">Edition only Can trade freelyin market<br /> </p>

                                            <p className="cardinnertextp mt-3">Group Staking can create <br />  </p> */}
                                            <p className="cardinnertextp text-left ">
                                                <ul className='ulcard'>

                                                    <li className='ullipsection'> 12,000 limited edition NFTs</li>
                                                    <li className='ullipsection'>  Likely to be closed at stage 1</li>
                                                    <li className='ullipsection'>   NFT Owner Gauge Coin; Initial Mining Qualification</li>
                                                    <li className='ullipsection'>   NFT staking interest farming</li>
                                                    <li className='ullipsection'>   NFT market buying and selling possible</li>
                                                </ul>



                                            </p>
                                        </div>


                                    </div>


                                </div>



                            </div>
                        </div>




                        <div className="row ">
                            <div className="col-lg-6" >
                                <div className="maincarddiv">
                                    <div className="card carddivborder mt-5">

                                        <div className="card-body cardtextb">
                                            <div className=" mobileicon">
                                                <i class="fas fa-robot"></i>
                                            </div>
                                            <h2 className="text-white text-center mt-4 cardheadingmaininnersub">Metaverse</h2>
                                            {/* <p className="cardinnertextp">NFT card trade <br />  </p> */}
                                            <p className="cardinnertextp">
                                                <ul className='ulcard1'>
                                                    <li className='ullipsection'> Priority is initial movement data and virtual world creation</li>
                                              
                                                    <li className='ullipsection'>  Metaverse content fee revenue sharing virtual world game.</li>
                                                   
                                                </ul>


                                            </p>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div className="col-lg-6" >
                                <div className="maincarddiv2">
                                    <div className="card carddivborder mt-5">

                                        <div className="card-body cardtextb">
                                            <div className=" mobileicon">
                                                <i class="far fa-gamepad"></i>
                                            </div>
                                            <h2 className="text-white mt-3 text-center cardheadingmaininnersub">Game</h2>
                                            {/* <p className="cardinnertextp">NFT Card can trade <br />  </p> */}
                                            <p className="cardinnertextp">
                                                <ul className='ulcard'>
                                                    <li className='ullipsection'>Airdrop of “Rod coin” is required for Meta gauge virtual world games</li>
                                               
                                                    <li className='ullipsection'> Meta gauge virtual world game item discount purchase</li>
                                                  
                                                    <li className='ullipsection'>NFT can be used in the Meta gauge virtual world games</li>
                                                   

                                                </ul>


                                            </p>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <br /><br /><br /><br />
            </div>



        </div>
    )
}

export default Feature
