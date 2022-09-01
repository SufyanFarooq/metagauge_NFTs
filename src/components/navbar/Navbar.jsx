import React,{useState, useEffect} from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assests/logo.png'
import './Navbar.css';

export default function AppNavbar({ Navprop }) {


    return (
        <div>
            <Navbar expand="xl" className='navbg'>
                <Container  className=''>
                    <Navbar.Brand href="#home" className="logo ">
                        <img src={logo} width="100px" className='logotop' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="bas   ic-navbar-nav" className="ButtonNav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navtoplink ">
                            <Nav.Link href="#homepage" className="pe-1   navlinkcolor active " >HOME</Nav.Link>
                            <Nav.Link href="#NFT" className="pe-1  navlinkcolor ">NFT CARD</Nav.Link>
                            <Nav.Link href="#About" className="pe-1  navlinkcolor">ABOUT</Nav.Link>
                            <Nav.Link href="#Token" className="pe-1  navlinkcolor">TOKENOMICS</Nav.Link>
                            <Nav.Link href="#feature" className="pe-1  navlinkcolor">FEATURE</Nav.Link>
                            <Nav.Link href="#" className="pe-1  navlinkcolor" disabled='true'> STAKING <span className='soon'>coming<br />soon</span> </Nav.Link>
                            <Nav.Link href="##" className="pe-1  navlinkcolor" disabled='true'>
                                NFT MARKETING <span className='soon1'>coming<br /> soon</span>
                            </Nav.Link>

                            <Nav.Link href="#link" className="pe-3  navlinkcolor">WHITEPAPER</Nav.Link>

                            <button className=" navlinkcolor btn btn-danger nsvBtnMint"  onClick={() => Navprop(true)}>My Mint</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar>
        </div>
    )
}
