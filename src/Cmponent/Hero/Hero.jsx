import React from 'react';
import imgs from '../../assets/hero-bg-home.png'
const Hero = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.60) 100%),
        url(${imgs})`, width: ' 100%',
            height: '440px', position: 'relative'
        }}>
            <div className='d-block d-lg-none container'>
                <nav class="navbar bg-transparent">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white" />
                        </svg></a>
                        <div class="d-flex" >
                            <button class="btn btn-outline-light" >Join group</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='text-white mx-5 lh-0 pb-lg-5' style={{ paddingTop: '286px' , paddingBottom:'80px' }} >
                <h1 className='h1'>Computer Engineering</h1>
                <p className='fw-light  '>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Hero;