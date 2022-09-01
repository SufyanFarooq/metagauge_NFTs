import React from 'react'

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import './Sliderstyle.css'

function Slidercheck() {
    return (
        <>

            <MDBCarousel className='Slidermain'>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                        <MDBCarouselElement src='1st.jpg' alt='...'  className='imgslider'/>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='2nd.jpg' alt='...' className='imgslider' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='3rd.jpg' alt='...' className='imgslider' />
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>

        </>
    )
}

export default Slidercheck
