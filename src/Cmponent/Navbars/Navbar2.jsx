import React from 'react';
import logo from '../../assets/HobbyCue Logo v2 1.png'
import search from '../../assets/search.svg'
import search2 from '../../assets/search2.svg'
import explore from '../../assets/explore.svg'
import arrow from '../../assets/Arrow.svg'
import hobbies from '../../assets/download.jpg'
import bookmark from '../../assets/bookmark.svg'
import bell from '../../assets/bell.svg'
import cart from '../../assets/cart.svg'
const Navbar2 = () => {
  return (
    <div className='maincontainer'>
      <nav className="navbar navbar-expand-xl bg-white  ">
        <div className="container-xxl  ">
          <div className='d-block d-xl-none'>
            <a className="navbar-brand me-5" >
              <img src={logo} style={{ width: '156.404px', height: '32px' }} />
            </a>
          </div>

          <div className='d-block d-xl-none justify-content-end'>

            <ul className="nav justify-content-end  align-items-center">

              <li className="nav-item align-items-center">
                <a style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#000'
                }}>
                  <span >
                    <img src={search2} />
                  </span>

                </a>
              </li>
              <li className="nav-item align-items-center">
                <a className=" " style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#000', paddingLeft: '24px'
                }}>
                  <span >
                    <img src={bell} />
                  </span>

                </a>
              </li>



            </ul>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className=' d-none d-lg-block'>
              <a className="navbar-brand " >
                <img src={logo} style={{ width: '293.258px', height: '60px' }} />
              </a>
            </div>
            <ul className="navbar-nav me-auto " >


              <div className="input-group  ms-2  " style={{ width: '300px', height: '40px', borderRadius: '0px 8px 8px 0px' }} >
                <input type="text" className="form-control" style={{ backgroundColor: '#EBEDF0', fontSize: '12px', fontWeight: '300' }} placeholder="Search here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text " id="basic-addon2" style={{ backgroundColor: '#8064A2', height: '40px' }}> <img src={search} /></span>
              </div>


            </ul>
            <div>
              <ul className="nav justify-content-end align-items-center">
                <li className="nav-item align-items-center dropdown" >
                  <a className='' data-bs-toggle="dropdown" aria style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000', textDecoration: 'none'

                  }}>
                    <span className='me-1'>
                      <img src={explore} />
                    </span>
                    Explore
                    <span>
                      <img src={arrow} />
                    </span>

                  </a>
                  <ul className="dropdown-menu  " >
                    <li><a className="dropdown-item" href="#">People - Community</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Products - Store</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                  </ul>
                </li>

                <li className="nav-item align-items-center">
                  <a className=" " style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000',
                    textDecoration: 'none', paddingLeft: '24px'

                  }}>
                    <span className='w-25 me-1' >
                      <img src={hobbies} className='img-fluid ' style={{ width: '12px', height: '12px' }} />
                    </span>
                    Hobbies
                    <span>
                      <img src={arrow} />
                    </span>
                  </a>
                </li>
                <li className="nav-item align-items-center">
                  <a className="  " style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000', paddingLeft: '24px'
                  }}>
                    <span >
                      <img src={bookmark} />
                    </span>

                  </a>
                </li>
                <li className="nav-item align-items-center">
                  <a className="  " style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000', paddingLeft: '24px'
                  }}>
                    <span >
                      <img src={bell} />
                    </span>

                  </a>
                </li>
                <li className="nav-item align-items-center">
                  <a className="  " style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000', paddingLeft: '24px'
                  }}>
                    <span >
                      <img src={cart} />
                    </span>

                  </a>
                </li>
                <li className="nav-item align-items-center">
                  <a className="  " style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#000', paddingLeft: '24px'

                  }}>
                    <button type="button" className="btn " style={{
                      width: '112px',
                      height: '40px',
                      border: 'solid',
                      borderWidth: '1px',
                      color: '#8064A2',
                      borderColor: '#8064A2',
                      borderRadius: '8px '
                    }}>
                      Sign In
                    </button>
                  </a>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;