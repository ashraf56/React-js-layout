import React from 'react';
import './Addown.css'
import pl from '../../assets/plus.svg';

const Addown = () => {
    return (
        <div className=' mx-auto my-5' style={{backgroundColor:'#F7FDFF',padding:'100px'}}>
            <div className='container ' style={{maxWidthwidth:'1240px',maxHeightheight: '284px',borderRadius:' 8px',
border:' 1px solid var(--grey-light, #CED4DA)',
background: 'var(--grey-white, #FFF)', padding:'40px'}}>
<div className='d-flex  align-items-center  ' style={{gap:'24px'}}>
    <img src={pl} />
    <h2 className='pt-2' style={{fontSize:'24px', fontWeight:'600',fontFamily:'poppins'}}>Add your own</h2>
</div>

<div>
    <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
</div>

<button className='btncs'>Add new</button>
            </div>
        </div>
    );
};

export default Addown;