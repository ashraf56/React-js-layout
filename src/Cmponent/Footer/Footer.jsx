import React from 'react';
import './Footer.css'
import i1 from '../../assets/Group 56.svg'
import i2 from '../../assets/Group 60.svg'
import i3 from '../../assets/Group 61.svg'
import i4 from '../../assets/Group 62.svg'
import i5 from '../../assets/Group 63.svg'
const Footer = () => {
    return (
        <div className='container'>
            <div className='row gap-0 '>
                <div className='col-md-3'>

                    <ul><h3>Hobbycue</h3>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Add a Listing</a></li>
                        <li><a href="#">Claim Listing</a></li>
                        <li><a href="#">Post a Query</a></li>
                        <li><a href="#">Add a Blog Post</a></li>
                        <li><a href="#">Other Queries</a></li>
                    </ul>

                </div>
                <div className='col-md-3 '>

                    <ul><h3>How Do I</h3>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Blog Posts</a></li>
                        <li><a href="#">Blog Posts</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div className='col-md-3'>

                    <ul>
                        <h3>Quick Links</h3>              <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Add a Listing</a></li>
                        <li><a href="#">Claim Listing</a></li>
                        <li><a href="#">Post a Query</a></li>
                        <li><a href="#">Add a Blog Post</a></li>
                        <li><a href="#">Other Queries</a></li>
                    </ul>
                </div>
                <div className='col-md-3'>

                    <div className='d-flex flex-column '>
                        <div className='mb-4'>
                            <h5 className='text-black'>Social Media</h5>
                            <div>
                                <img src={i1} style={{ paddingRight: '10px' }} />
                                <img src={i2} style={{ paddingRight: '10px' }} />
                                <img src={i3} style={{ paddingRight: '10px' }} />
                                <img src={i4} style={{ paddingRight: '10px' }} />
                                <img src={i5} style={{ paddingRight: '10px' }} />
                                <img src={i2} style={{ paddingRight: '10px' }} />
                                <img src={i3} style={{ paddingRight: '10px' }} />




                            </div>
                        </div>

                        <div>
                            <h5 className=' text-black'>Invite Friends</h5>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control invite" placeholder="Invite" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2" style={{ background: '#8064A2', color: 'white' }}>Invite</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='text-center' style={{ height: '78px' }}>
                <p className='copy'>© Purple Cues Private Limited</p>
            </div>
        </div>
    );
};

export default Footer;