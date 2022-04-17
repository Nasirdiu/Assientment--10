import React from 'react';
import found from '../../../images/notfound.png'
const NotFound = () => {
    return (
        <div className='text-center text-danger'>
            <h1>NotFound 404</h1>
            <img src={found} alt="" />
        </div>
    );
};

export default NotFound;