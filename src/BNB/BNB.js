import React, { useState, useEffect } from 'react'
import './BNBStyle.css'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import Slidercheck from '../Slider/Slidercheck';
import Web3 from 'web3';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayMessage from '../components/DisplayMessage';
import { loadWeb3 } from "../components/Api/Api";
import { contractAddress, contractAbi } from "../components/utils/Constants"
const webSupply = new Web3('https://bsc-dataseed1.binance.org');

function BNB() {
    let [account, setAccount] = useState();
    let [supply, setSupply] = useState(0);
    let [useBalance, setUserBalance] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    const get = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            setUserBalance(0)
        }  else {
            let web3= window.web3;
            let contract = new web3.eth.Contract(contractAbi, contractAddress);
            let bal = await contract.methods.balanceOf(acc).call();
            setUserBalance(bal)


        }



    }

    const myMint = async () => {
        try {
            let val = "1";
            let acc = await loadWeb3();
            if (acc == "No Wallet") {
                setShow(true);

        } else{
            const web3 = window.web3;

            let contract = new web3.eth.Contract(contractAbi, contractAddress);
            await contract.methods.mint().send({
                from: acc,
                value: web3.utils.toWei(val)
            }).on("transactionHash", async()=>{

                let bal = await contract.methods.balanceOf(acc).call();
                setUserBalance(bal)
            })
        }
        } catch (e) {
            console.log("Error While Minting", e);
        }
    }
    const supplyCount = async () => {
        // const web3 = window.web3;
        let contract = new webSupply.eth.Contract(contractAbi, contractAddress);
        let sply = await contract.methods.totalSupply().call();
        setSupply(sply);

    }
    setInterval(() => {
        supplyCount()
        get();
    }, 1000);
   
    useEffect(() => {
        supplyCount()
        get();
    }, [])


    const progress = (supply / 800) * 100;
    return (
        <div className='bgBNB ' id='NFT'>
            {
                show ?  <DisplayMessage show={show} handleClose={handleClose}/>  :<></>
               
            }
            <div className="container  BNBpaddingdiv"  >
                <div className="">
                    <br /> <br />
                    <div className="Firstimg">
                        <img src="02.jpg" alt="" width="60%" className='Firstimginner' />
                    </div>
                    <br /><br />
                    <div className="maindivcol" style={{ marginTop: '4rem' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 ">
                                <div className="Sliderdiv" >
                                    {/* <img src="Meta-Gauge-2.jpg" alt="" width="75%" className='Firstimginner' /> */}

                                    <Slidercheck className="MainSlider" />

                                </div>
                            </div>
                            <div className="col-lg-7 BNBtextcol" >
                                <div className='bnblINETHROUGH' >
                                  <h1 className="divStage">Stage 1</h1>
                                    <h4> <span className="divcol1"> Price:</span> <span className="divcol">3BNB</span> </h4>
                                    <h4 className='text-white'>Buying Price: 1BNB</h4>
                                </div>
                                <div className="uldiv">

                                    <div className="row mt-5">
                                        <div className="col-lg-6 mt-3">
                                            <div className="carddiv1">
                                                <div className="card maincard">

                                                    <div className="card-body cardbody1">
                                                        <div className="mainimgdiv">
                                                            <img src="User.svg" alt="" width="40px" className="imgheader" />

                                                        </div>

                                                        <p className='mt-3 text-center'> NFT is limited edition and likely to be closed after Stage 1.</p>
                                                        <p className='mt-3 pb-4 text-center'> NFT owners can form a town in the virtual world of Metagauge.</p>
                                                        <br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-3">

                                            <div className="carddiv2">
                                                <div className="card maincard2">

                                                    <div className="card-body cardbody1">
                                                        <div className="mainimgdiv">
                                                            <img src="Innovative.svg" alt="" width="40px" className="imgheader" />

                                                        </div>
                                                        <p className='mt-3 text-center'> NFT owners can proceed with initial mining with Metagauge’s mobile data Dapp, </p>
                                                        <p className='mt-3 text-center'>  which can lead to grrat rewards in the future when the value of gauge coin rises.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-lg-6 mt-3">
                                            <div className="carddiv1">
                                                <div className="card maincard2">

                                                    <div className="card-body cardbody1">
                                                        <div className="mainimgdiv">
                                                            <img src="P2P.svg" alt="" width="40px" className="imgheader" />

                                                        </div>
                                                        <p className='mt-3 text-center'> NFT owners have the priority to apply for the private sale of gauge coins.</p>
                                                        <p className='mt-3 pb-2 text-center'> NFTs can be freely bought and sold in the gauge market.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <div className="carddiv1">
                                                <div className="card maincard">

                                                    <div className="card-body cardbody1">
                                                        <div className="mainimgdiv">
                                                            <img src="Infinite.svg" alt="" width="40px" className="imgheader" />

                                                        </div>

                                                        <p className='mt-3 text-center ppp'>NFT owners can earn stable monthly interest income through staking.</p>
                                                        <p className='mt-3 text-center ppp'>NFT owners have the right to vote in the future Metagauge ecosystem known as “MasterNodes”  .</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                   
                                    <br />
                                    <h5 className="limiteddivgdghfj">Limited Edition NFT Value</h5>
                                    <ProgressBar now={progress} variant="warning" label={`${progress}% `} className='BNBProgressbar' />
                                    <div className="footericon">
                                        <div className="iconinner mt-3">
                                            <div className="scalediv">
                                                <i class="fas fa-balance-scale  " style={{ marginLeft: 'rem', color: '#FFBA00', fontSize: '25px' }}>  </i>
                                                <p className='' style={{ marginLeft: '1rem' }}>{useBalance}</p>

                                            </div>
                                            <div className="Userdiv">
                                                <i class="fas fa-user-friends  " style={{ color: '#FFBA00', fontSize: '25px' }}></i>
                                                <p style={{ marginLeft: '1rem' }}>SOLD OUT : {supply}/800 NTF Card</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="BNBfooterbtn">
                                        <button
                                            onClick={() => myMint()}
                                            className='btn form-control BNBbtn' >BUY NOW</button>
                                    </div>
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

export default BNB
