import React, { useState, useEffect } from 'react';
import './Model.css';
import Modal from 'react-bootstrap/Modal';
import { MypicsArray } from "./PicArray"
import axios from 'axios';
import { contractAbi, contractAddress } from '../components/utils/Constants'
import { loadWeb3 } from '../components/Api/Api'
import Web3 from 'web3';
const web3 = new Web3('https://bsc-dataseed1.binance.org');

function MyVerticallyCenteredModal(props) {
    let [limit, setLimit] = useState(4);
    let [mintArray, setMintArray] = useState([])
    let [test, setTest] = useState([])
    let [isCheck, setIsCheck]=("")

    const get = async () => {
        try {
            let add = await loadWeb3();
            if(add== "No Wallet"){
                setIsCheck("")
            }else{
            setLimit(limit + 4)
            const web3 = window.web3;
            let contract= new web3.eth.Contract(contractAbi,contractAddress)
            let mintId = await contract.methods.getUserTokens(add).call()
            let userBalance = await contract.methods.balanceOf(add).call();
            let resArray = []
            let dummyAray = [...test];
            dummyAray.map((item) => {
                resArray.push(item)
            })
            for (let i = test?.length; i <= 3 + test?.length && i < userBalance; i++) {
                await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${mintId[i]}.json`).then((res) => {
                    resArray.push(res);
                })
                setTest(resArray);


            }

            // let mintGet = mintId.map(async (item) => {
            //     return await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${item}.json`);
            // })
            // let mintPromise = await Promise.allSettled(mintGet);
            // setMintArray(mintPromise)
        }
        } catch (error) {
            console.log("error while get mint value", error);
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='modeltopdiv'>


                    <Modal
                        data-keyboard="false" backdrop="static"
                        {...props}
                        size="xl"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header className='modelHeader' closeVariant="white" closeButton onClick={() => setLimit(4)} >

                        </Modal.Header>


                        <Modal.Body className='Modelbody '>
                            <div   >
                                <h1 className='text-white text-center'>My Mints</h1>
                                <div className="maindiv">
                                    {
                                        test?.slice(0, limit).map((items) => {
                                            return (
                                                <>
                                                    <div className="m-2">
                                                        <img className='cropeImage' src={items.data?.image} alt="" />
                                                        <span className='imageText'  >&nbsp;&nbsp;#{items.data?.dna}</span>
                                                    </div>

                                                </>

                                            )
                                        })
                                    }


                                </div>


                                <div className="bodybtn mt-4 d-flex justify-content-center ">
                                    <button
                                        onClick={() => get()}
                                        className='btn btn-danger btn-lg'>Load More</button>
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

function Modelopen({ setModalShow, modalShow }) {

    return (
        <div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}

export default Modelopen
