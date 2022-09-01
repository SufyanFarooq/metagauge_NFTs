import React from 'react'
import './ContactStyle.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contactus() {
    const submitData=(e)=>{
        e.preventDefault();
        toast.success("Your request is submited successfully");
    }
    return (
        <div className='Contacbg'>
            <div className="container-fluid ">
                <div className="container">
                <br /><br />
                    <div className="maincard5 ">
                    
                        <div className="card cardmain1 ">
                            <div className="card-body">
                                <h1 className='CardHeading'>CONTACT US</h1>
                                <div className="row mt-5">
                                    <div className="col-lg-6">

                                        <div className="mainformdiv">
                                            <form action="" onSubmit={submitData}>
                                                <div className="form-group">

                                                    <input type="text" placeholder='Name*' className='form-control forminputfield mt-3 ' required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" placeholder='Email*' className='form-control forminputfield  mt-3 ' required />

                                                </div>
                                                <div className="form-group">
                                                    <input type="number" placeholder='Phone' className='form-control forminputfield mt-3 ' required />

                                                </div>
                                                <div className="form-group">
                                                    <input type="text" placeholder='Subject' className='form-control forminputfield  mt-3 ' required />

                                                </div>

                                                <div className="form-group mt-3">

                                                <textarea name="text" id="" cols="30" rows="5" className='form-control textmassage text-white ' required placeholder='Massage*'></textarea>

                                                </div>

                                                <button className='btn btn-danger form-control btn-lg mt-3 forminputfield' type='submit'>SUBMIT</button>





                                            </form>
                                        </div>

                                    </div>

                                    <div className="col-lg-6">

                                        <div className="contactimg mt-3">
                                            <img src="CONTACT.jpg" alt="" width="80%"  className='contactimgmain' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        
                    </div>
                </div>
            </div>
<br /><br />
        </div>
    )
}

export default Contactus
