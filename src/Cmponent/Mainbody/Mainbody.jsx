import React from 'react';
import img1 from '../../assets/tree.png'
import avatar1 from '../../assets/Avater1.png'
import avatar2 from '../../assets/Avater2.png'
import steel from '../../assets/steel.png'
import car from '../../assets/car.png'

const Mainbody = () => {
  return (
    <div className='container mx-auto'>
      <div className='row h-100'>
        <div className='col-lg-7 col-md-10 '>

          <div className="card mb-3">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className='fw-semibold'>✍️ Article</p>
              <h5 className="card-title " style={{ fontSize: '22px' }}>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
              <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>


              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Sarthak Kamra
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>

                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary"><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                  </svg></span>1.4k views</small></div>
                <div className='d-none d-lg-block'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='d-block d-lg-none'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> <span>share</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <img src={steel} className="card-img-top" />
            <div className="card-body">
              <p className='fw-semibold'>🔬️ Education</p>
              <h5 className="card-title " style={{ fontSize: '22px' }}>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
              <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>


              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Sarah West
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary"><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                  </svg></span>1.4k views</small></div>
                  <div className='d-none d-lg-block'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='d-block d-lg-none'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> <span>share</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <img src={car} className="card-img-top" />
            <div className="card-body">
              <p className='fw-semibold'>🗓️ Meetup</p>
              <div className='d-flex justify-content-between'>

                <h5 className="pe-5 " style={{ fontSize: '22px' }}>Finance & Investment Elite Social Mixer @Lujiazui</h5>
               
                <div className=' dropdown '>
                <button className='btn btn-light  btn-sm ' data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M18.6667 14.0001C18.6667 15.2834 19.7167 16.3334 21 16.3334C22.2834 16.3334 23.3334 15.2834 23.3334 14.0001C23.3334 12.7167 22.2834 11.6667 21 11.6667C19.7167 11.6667 18.6667 12.7167 18.6667 14.0001ZM16.3334 14.0001C16.3334 12.7167 15.2834 11.6667 14 11.6667C12.7167 11.6667 11.6667 12.7167 11.6667 14.0001C11.6667 15.2834 12.7167 16.3334 14 16.3334C15.2834 16.3334 16.3334 15.2834 16.3334 14.0001ZM9.33337 14.0001C9.33337 12.7167 8.28337 11.6667 7.00004 11.6667C5.71671 11.6667 4.66671 12.7167 4.66671 14.0001C4.66671 15.2834 5.71671 16.3334 7.00004 16.3334C8.28337 16.3334 9.33337 15.2834 9.33337 14.0001Z" fill="black" />
                </svg></button>
                <ul class="dropdown-menu ">
    <li><a class="dropdown-item" >Edit</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
  </ul>
                </div>
              </div>

              <div className='d-flex fw-semibold '>
                <div className='pe-5'>
                  <p>  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1_895)">
                      <path d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_895">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg></span> Fri, 12 Oct, 2018</p>
                </div>

                <div>
                  <p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_1_886)">
                        <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black" />
                        <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_886">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg></span>
                    Ahmedabad, India</p>
                </div>

              </div>

              <button className='btn mb-4 fw-bold btn-outline-dark w-100' style={{
                color: '#E56135', height: '38px', fontSize: '13px'
              }}>Visit Website</button>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar1} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Ronal Jones
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>800 views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 align-items-center  d-none d-lg-block"><small className="text-body-secondary"><span className='pe-1' style={{
                    fontSize: '12px'
                  }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                    </svg></span>800 views</small></div>
                    <div className='d-none d-lg-block'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='d-block d-lg-none'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> <span>share</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <p className='fw-semibold'>💼️ Job</p>
              <div className='d-flex justify-content-between'>

                <h5 className="card-title pe-5" style={{ fontSize: '22px' }}>Software Developer</h5>

                <button className='btn btn-light  btn-sm' style={{ marginLeft: '' }}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M18.6667 14.0001C18.6667 15.2834 19.7167 16.3334 21 16.3334C22.2834 16.3334 23.3334 15.2834 23.3334 14.0001C23.3334 12.7167 22.2834 11.6667 21 11.6667C19.7167 11.6667 18.6667 12.7167 18.6667 14.0001ZM16.3334 14.0001C16.3334 12.7167 15.2834 11.6667 14 11.6667C12.7167 11.6667 11.6667 12.7167 11.6667 14.0001C11.6667 15.2834 12.7167 16.3334 14 16.3334C15.2834 16.3334 16.3334 15.2834 16.3334 14.0001ZM9.33337 14.0001C9.33337 12.7167 8.28337 11.6667 7.00004 11.6667C5.71671 11.6667 4.66671 12.7167 4.66671 14.0001C4.66671 15.2834 5.71671 16.3334 7.00004 16.3334C8.28337 16.3334 9.33337 15.2834 9.33337 14.0001Z" fill="black" />
                </svg></button>
                
              </div>

              <div className='d-flex fw-semibold '>
                <div className='pe-5'>
                  <p>  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1_941)">
                      <path d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_941">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg></span> Innovaccer Analytics Private Ltd.</p>
                </div>

                <div>
                  <p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_1_886)">
                        <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black" />
                        <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_886">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg></span>
                    Noida, India</p>
                </div>

              </div>

              <button className='btn mb-4 fw-bold btn-outline-dark w-100' style={{
                color: '#02B875', height: '38px', fontSize: '13px'
              }}>Apply on Timesjobs</button>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex pt-2 align-items-center '>
                  <div>
                    <figure className="figure me-2">
                      <img src={avatar2} className="img-fluid " style={{ height: '48px', width: '48px' }} />
                    </figure>
                  </div>
                  <div>
                    <p className="fw-semibold text-black ms-2" style={{ fontSize: '18px' }}>Joseph Gray
                      <span className="text-body-secondary d-block d-lg-none " style={{
                        fontSize: '12px'
                      }}>1.4k views</span>
                    </p>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className="card-text me-5 d-none d-lg-block"><small className="text-body-secondary"><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252" />
                  </svg></span>1.4k views</small></div>
                  <div className='d-none d-lg-block'>
                <button className='btn btn-light '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='d-block d-lg-none'>
                <button className='btn btn-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_968)">
                        <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> <span>share</span>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='col-lg-5 col-md-2 container mx-auto d-none d-lg-block'>

          <div className='d-flex justify-content-between align-items-center m-5'>
            <div className='pt-3'>
              <p>
                <span className='pe-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_1_886)">
                    <path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black" />
                    <path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_886">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg></span>
                Noida, India</p>
            </div>

            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_1_848)">
                    <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_848">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div><hr className='mx-5' style={{ marginTop: '-40px', }} />
          <div className='d-flex justify-content-center m-5'>
            <span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g opacity="0.5" clip-path="url(#clip0_1_853)">
                <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1_853">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg></span>
            <p>
              Your location will help us serve better and extend a personalised experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;