import React from 'react'
import './RoadStyle.css'
import Typical from 'react-typical'

function RoadMap() {
    return (
        <div id='Roadmap'>
            <div className="container-fluid Roadmapcolordiv  " >
                <div className="container" >
                    <div className="roadmapmaindiv" >
                        <div className="row" >
                            <div className="mainheading" >
                                <br />
                                {/* <h1 className="text-white text-center mt-5" > ROADMAP </h1> */}
                                <Typical className="ROADMAP "
                                    steps={['ROADMAP', 1500, '', 1500]}
                                    loop={Infinity}
                                    wrapper="p"
                                />

                            </div>

                            <div className="col-lg-6 mt-5" >



                                <div className="maincarddiv">
                                    <div className="card carddivRoad">


                                        <div className="card-body cardtextb">
                                            {/* <h2 className="text-white mt-3 text-left ">PHASE 1</h2> */}
                                            <Typical className="PHASE1 "
                                                steps={['PHASE 1', 1500, '', 1500]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                            <p className="cardinnertextp">

                                                <ul className='Roadiconlist'>
                                                    <li className='roadmapliulsub'> Token Launch </li>
                                                    <li className='roadmapliulsub'> Website Launch</li>
                                                    <li className='roadmapliulsub'> NFT Card Presale</li>
                                                    <li className='roadmapliulsub'>  Build to 2,000 Telegram and Twitter members</li>
                                                    <li className='roadmapliulsub'> Launch on Pancake Swap</li>
                                                    <li className='roadmapliulsub'> 2,000 Holders</li>
                                                  
                                                </ul>
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-5" >



                                <div className="maincarddiv2">
                                    <div className="card carddivRoad">


                                        <div className="card-body cardtextb">
                                            {/* <h2 className="text-white mt-3 text-left ">PHASE 2</h2> */}
                                            <Typical className="PHASE2 " 
                                                steps={['PHASE 2', 1500, '', 1500]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                            <p className="cardinnertextp">

                                                <ul className='Roadiconlist'>
                                                    <li className='roadmapliulsub'>  <span >Reward Dapp Launch</span> </li>
                                                 
                                                    <li className='roadmapliulsub'> Staking Level Card Open</li>
                                                    <li className='roadmapliulsub'>  Massive marketing campaigns</li>
                                                    <li className='roadmapliulsub'> CoinGecko Listing</li>
                                                    <li className='roadmapliulsub'> CoinmarketCap Listing</li>
                                                    <li className='roadmapliulsub'> NFT Marketplace Open</li>
                                                    <li className='roadmapliulsub'> Offline advertising & partnerships</li>
                                                </ul>
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>





                    </div>
                    <div className="roadmapmaindiv" >
                        <div className="row" >


                            <div className="col-lg-6 mt-5" >



                                <div className="maincarddiv">
                                    <div className="card carddivRoad">


                                        <div className="card-body cardtextb">
                                            {/* <h2 className="text-white mt-3 text-left ">PHASE 3</h2> */}
                                            <Typical className="PHASE3 "
                                                steps={['PHASE 3', 1500, '', 1500]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                            <p className="cardinnertextp">

                                                <ul className='Roadiconlist'>
                                                    <li className='roadmapliulsub'>  <span >50,000 Holders</span> </li>
                                                    <li className='roadmapliulsub'> Larger scale marketing</li>
                                                    <li className='roadmapliulsub'> Launch First Game</li>
                                                    <li className='roadmapliulsub'> Build Social Media Presence</li>
                                                    <li className='roadmapliulsub'> Voting Community Listing</li>
                                                    <li className='roadmapliulsub'>  Listing on CEX</li>
                                                </ul>
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-5" >



                                <div className="maincarddiv2">
                                    <div className="card carddivRoad">


                                        <div className="card-body cardtextb">
                                            {/* <h2 className="text-white mt-3 text-left ">PHASE 4</h2> */}
                                            <Typical className="PHASE4 "
                                                steps={['PHASE 4', 1500, '', 1500]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                            <p className="cardinnertextp">

                                                <ul className='Roadiconlist'>
                                                    <li className='roadmapliulsub'>  <span >METAVERSE OPEN</span> </li>
                                                    <li className='roadmapliulsub'> 100,000 Holders</li>
                                                   
                                                    <li className='roadmapliulsub'>  List on Major Exchanges</li>
                                                    <li className='roadmapliulsub'> Attract celebrities in promo</li>
                                                </ul>
                                            </p>

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

    )
}

export default RoadMap