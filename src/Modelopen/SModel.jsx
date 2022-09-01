import React, { useState, useEffect } from 'react';
import './Model.css';

import Modal from 'react-bootstrap/Modal';
import { MypicsArray } from "./PicArray"
import axios from 'axios';
import { contractAbi, contractAddress } from '../components/utils/Constants'
import { loadWeb3 } from '../components/Api/Api'


function MyVerticallyCenteredModal(props) {

    let [limit, setLimit] = useState(4);
    let [mintArray, setMintArray] = useState([])
    let [test, setTest] = useState([])
    const url = 'https://gateway.pinata.cloud/ipfs/QmQDqmQ2aiLFbiArQUY4pSumhAtm3oiE3Mo6uARmWznEHu/1%20(5).png';// Axios

    const loadPics = () => {
        // let myLimit = limit + 4;
        setLimit(4)
        console.log("body call")
    }
    //   document.body.addEventListener("click", loadPics)
    const get = async () => {
        try {
            setLimit(limit + 4)
            let add = await loadWeb3();
            const web3 = window.web3;
            let contract = new web3.eth.Contract(contractAbi, contractAddress);
            let mintId = await contract.methods.getUserTokens(add).call()
            let userBalance = await contract.methods.balanceOf(add).call();
            console.log("mint id", mintId);
            let resArray = []
            let dummyAray = [...test];
            dummyAray.map((item) => {
                resArray.push(item)
            })
            for (let i = test?.length; i <= 3 + test?.length && i < userBalance; i++) {
                await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${mintId[i]}.json`).then((res) => {
                    resArray.push(res);
                    console.log("res", res);
                })




                // let dummy= [...test,resArray]
                setTest(resArray);


            }

            let mintGet = mintId.map(async (item) => {
                return await axios.get(`https://gateway.pinata.cloud/ipfs/QmP3CU9tcQGYbBYzzhWk8tc4fcQePHXKwJqYBMY3LZNBw7/${item}.json`);
            })
            let mintPromise = await Promise.allSettled(mintGet);
            setMintArray(mintPromise)
            console.log("mint Promise", mintPromise);
        } catch (error) {
            console.log("error while get mint value", error);
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='Modelbody' closeButton>
                <h1 className='text-white text-center'>My Mints</h1>
                <div className="row mt-5">
                    <div className="
                     mt-3">
                        <div className='myArraydiv'>
                            {
                               test?.slice(0, limit).map((items) => {
                                    return (
                                        <div className="col-lg-3  imggmodel mt-3  ">
                                             <img className='cropeImage' src={items.data?.image} alt="" />
                                                <span className='imageText'  >&nbsp;&nbsp;#{items.data?.dna}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className="bodybtn mt-4 d-flex justify-content-center ">
                    <button
                        onClick={() => get()}
                        className='btn btn-danger btn-lg'>Load More</button>
                </div>

            </Modal.Body>

        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
  

function SModel({ setModalShow, modalShow }) {
    // const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
           

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            
        </div>
    )
}

export default SModel
