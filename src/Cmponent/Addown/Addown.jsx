import React from 'react';
import './Addown.css'
import pl from '../../assets/plus.svg';

const Addown = () => {
    return (
        <div className=' mx-auto my-5 wholebody' >
            <div className='container mainlayout ' >
                <div className='d-flex  align-items-center  ' style={{ gap: '24px' }}>
                    <img src={pl} />
                    <h2 className='pt-2' style={{ fontSize: '24px', fontWeight: '600', fontFamily: 'poppins' }}>Add your own</h2>
                </div>

                <div>
                    <p className='textp'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                </div>

                <button className='btncs'>Add new</button>
            </div>
        </div>
    );
};

export default Addown;