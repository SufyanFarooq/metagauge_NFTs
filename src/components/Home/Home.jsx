import React from 'react'
import BNB from '../../BNB/BNB';
import AboutNFT from '../About/AboutNFT';
import Comedown from '../Comedown/Comedown';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import LandPage from '../LandPage/LandPage';
import NFTpage from '../NFT-Page/NFTpage'
import RoadMap from '../RoadMap/RoadMap';
import Homepage from '../LandPage/Homepage'
import Contactus from '../Contact US/Contactus';
import Modelopen from '../../Modelopen/Modelopen';

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div >
           
            <Modelopen modalShow={modalShow}  setModalShow={setModalShow}  />
               {/* <Homepage/> */}
            <LandPage  setModalShow={setModalShow}   />
            {/* <Comedown/> */}
            <BNB/>
            {/* <NFTpage/> */}
            <AboutNFT/>
            <Feature/>
            <RoadMap/>
            <Contactus/>
            <Footer/>
        </div>
    )
}
