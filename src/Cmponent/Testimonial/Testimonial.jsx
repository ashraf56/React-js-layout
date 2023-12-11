import React from 'react';
import './Testimonial.css'
import qt from '../../assets/qote.svg';
import play from '../../assets/Ellipse 24.svg';
import av from '../../assets/Avater1.png';
const Testimonial = () => {
    return (
        <div className=' parentlayout' >
            <div className=' innerlayout' >
                <div className='d-flex  align-items-center  ' style={{ gap: '24px' }}>
                    <img src={qt} />
                    <h2 className='pt-2' style={{ fontSize: '24px', fontWeight: '600', fontFamily: 'poppins' }}>Testimonials</h2>
                </div>

                <div className='Ap py-4'>
                    <p>
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                </div>

                <div className=' d-md-flex' style={{ gap: '80px' }}>

                    <div className='play row align-items-center justify-content-between'>
                        <div className='col-sm-2  '>

                            <div >
                                <img src={play} className='mgs' />
                            </div>



                        </div>
                        <div className='col-sm-8 ' >
                            <div className='d-flex' >
                                <input type="range" className="form-range" style={{ color: '#8064A2' }} /> <span className='ps-1'>0:00</span>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div>
                                <img src={av} />
                                <div style={{ marginTop: '-23px', marginLeft: '-7px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M15.9998 18.6666C18.2132 18.6666 19.9998 16.88 19.9998 14.6666V6.66663C19.9998 4.45329 18.2132 2.66663 15.9998 2.66663C13.7865 2.66663 11.9998 4.45329 11.9998 6.66663V14.6666C11.9998 16.88 13.7865 18.6666 15.9998 18.6666ZM23.8798 14.6666C23.2265 14.6666 22.6798 15.1466 22.5732 15.8C22.0265 18.9333 19.2932 21.3333 15.9998 21.3333C12.7065 21.3333 9.97315 18.9333 9.42649 15.8C9.31982 15.1466 8.77315 14.6666 8.11982 14.6666C7.30649 14.6666 6.66649 15.3866 6.78649 16.1866C7.43982 20.1866 10.6398 23.32 14.6665 23.8933V26.6666C14.6665 27.4 15.2665 28 15.9998 28C16.7332 28 17.3332 27.4 17.3332 26.6666V23.8933C21.3598 23.32 24.5598 20.1866 25.2132 16.1866C25.3465 15.3866 24.6932 14.6666 23.8798 14.6666Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className='d-flex' style={{ alignItems: 'center' }}>
                        <div>
                            <img src={av} width={80} height={80} />
                        </div>
                        <div >
                            <h5 className='n'>Shubha Nagarajan</h5>
                            <a className='aa'>Classical Dancer</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;