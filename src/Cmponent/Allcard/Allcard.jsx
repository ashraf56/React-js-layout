import React from 'react';
import './Allcard.css';
import people from '../../assets/people.svg'
import place from '../../assets/place.svg'
import product from '../../assets/product.svg'
import program from '../../assets/program.svg'

const Allcard = () => {
  return (
    <div className='container'>
      <div className='row ' style={{ marginTop: '94px' }}>
        <div className='col-md-6'>
          <div class="card " style={{ marginBottom: '24px' }}>
            <div class="card-body align-items-center p-5">
              <div className='d-flex align-items-center '>

                <img src={people} />

                <h5 style={{ fontSize: '24px', paddingLeft: '24px' }}> People</h5>

              </div>
              <p class="card-text" style={{ paddingTop: '26px', fontSize: '18px' }}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
              <button className='cardbtn'>Connect</button>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '24px' }}>
            <div class="card-body align-items-center p-5">
              <div className='d-flex align-items-center '>
                <div>

                  <img src={product} />
                </div>
                <div>
                  <h5 style={{ fontSize: '24px', paddingLeft: '24px' }}> Product</h5>
                </div>
              </div>
              <p class="card-text" style={{ paddingTop: '26px', fontSize: '18px' }}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
              <button className='cardbtn'>Get it</button>
            </div>
          </div>


        </div>
        <div className='col-md-6'>

          <div class="card" style={{ marginBottom: '24px' }}>
            <div class="card-body align-items-center p-5">
              <div className='d-flex align-items-center '>
                <div>

                  <img src={place} />
                </div>
                <div>
                  <h5 style={{ fontSize: '24px', paddingLeft: '24px' }}> Place</h5>
                </div>
              </div>
              <p class="card-text" style={{ paddingTop: '26px', fontSize: '18px' }}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
              <button className='cardbtn'>Meet up</button>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '24px' }}>
            <div class="card-body align-items-center p-5">
              <div className='d-flex align-items-center '>
                <div>

                  <img src={program} />
                </div>
                <div>
                  <h5 class="ps-3" style={{ fontSize: '24px', paddingLeft: '24px' }}> Program</h5>
                </div>
              </div>
              <p class="card-text" style={{ paddingTop: '26px', fontSize: '18px' }}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
              <button className='cardbtn'>Attend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcard;