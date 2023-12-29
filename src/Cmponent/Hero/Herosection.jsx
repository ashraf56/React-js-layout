import React from 'react';

import './Herosection.css'
import human1 from '../../assets/human1.svg'
import human2 from '../../assets/human2.svg'
import google from '../../assets/google.svg'
import fb from '../../assets/facebook.svg'
import tala from '../../assets/tala.svg'
import eyeoff from '../../assets/eyeoff.svg'
import eye from '../../assets/eye.svg'

const Herosection = () => {
    return (
        <div className='container-fluid'>
            <div className='row cotainers justify-content-center '>
                <div className='col-lg-6 d-flex flex-column' style={{ gap: '80px' }}>
                    <div>
                        <h1 className='' style={{ fontStyle: 'italic', fontWeight: '600', paddingTop: '100px' }}>Explore your <span style={{ color: '#0096C8', fontSize: '36px' }}>hobby</span> or <span style={{ color: '#8064A2' }}> passion</span></h1>
                        <div style={{ width: '100%' }}>
                            <p style={{ fontWeight: '300', fontSize: '14px', paddingTop: '32px' }}>
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…

                            </p>
                            <p style={{ paddingTop: '16px', fontWeight: '300', fontSize: '14px' }}>
                                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                            </p>
                        </div>

                    </div>

                    <div className=' d-none d-lg-flex gap-0 ' style={{ width: '50%' }}  >
                       
                    </div>
                </div>

                <div className='col-lg-6 align-items-center cardlayout'>

                    <div style={{ width: '410px' }} >
                        <ul className="nav  mb-3 nav-underline" id="pills-tab" role="tablist" >
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{ color: "#8064A2" }}>Sign in</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ color: "#8064A2" }}>Join in</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"   >
                                <div className='btns'>
                                    <div className='gbtn'>
                                        <img src={google} />
                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>  Continue with Google</span>
                                    </div>
                                    <div className='fbtn'>
                                        <img src={fb} />
                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>Continue with Facebook</span>
                                    </div>

                                </div>

                                <div className='deviders '>
                                    <div>
                                        <hr />
                                    </div>
                                    <div>
                                        <p className='dp'>Or connect with</p>
                                    </div>
                                    <div>
                                        <hr />

                                    </div>
                                </div>


                                <div>
                                    <div className="mb-3 mt-3" >
                                        <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Email" style={{ height: '40px' }} />
                                    </div>
                                    <div className=" input-group  mb-3 mt-3" style={{ height: '40px' }}>
                                        <input type="text" className="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn " style={{ backgroundColor: 'white' }} >
                                            <img src={eyeoff} />
                                        </button>
                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div>
                                            <div className="form-check align-items-center mb-4">
                                                <img src={tala} />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Forgot password?
                                                </label>
                                            </div>


                                        </div>
                                    </div>

                                    <div>
                                        <button className='continuebtn'>Continue</button>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">


                                <div className='btns'>
                                    <div className='gbtn'>
                                        <img src={google} />
                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>  Continue with Google</span>
                                    </div>
                                    <div className='fbtn'>
                                        <img src={fb} />
                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>Continue with Facebook</span>
                                    </div>

                                </div>

                                <div className='deviders '>
                                    <div>
                                        <hr />
                                    </div>
                                    <div>
                                        <p className='dp'>Or connect with</p>
                                    </div>
                                    <div>
                                        <hr />

                                    </div>
                                </div>


                                <div>
                                    <div className="mb-3 mt-3" >
                                        <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Email" style={{ height: '40px' }} />
                                    </div>
                                    <div className=" input-group   mt-3" >
                                        <input type="text" className="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ height: '40px' }} />
                                        <button className="btn " style={{ backgroundColor: 'white' }} >
                                            <img src={eye} />
                                        </button>

                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <div>

                                            </div>
                                            <div className="form-check  mb-4">
                                                <label className="form-check-label" for="flexCheckDefault" style={{
                                                    fontSize: "10px",
                                                    fontweight: '600'
                                                }}>
                                                    Password strength
                                                </label>
                                            </div>


                                        </div>
                                    </div>

                                    <div className='text-center' style={{ fontSize: "12px", color: '#6D747A' }}>
                                        <p>By continuing, you agree to our <span className='fw-bold'>Terms of Service</span> and <span className='fw-bold'>Privacy Policy.</span></p>
                                    </div>
                                    <div className='w-100'>
                                        <button className='agreebtn text-white'>Agree and Continue</button>
                                    </div>

                                </div>





                            </div>


                        </div>
                    </div>
                    <div className=' d-block d-lg-none  ' style={{ paddingTop: '80px' }}  >
                        <img src={human1} className='img-fluid' style={{
                            width: '150px',
                            height: '96px'
                        }} />

                        <img src={human2} className='img-fluid' style={{
                            width: '150px',
                            height: '96px'
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosection;