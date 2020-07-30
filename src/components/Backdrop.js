import React from 'react';
import './backdrop-styles.css'
 
const Backdrop = ({opened, close}) => {
    const closeBackdrop = () => {
        close(false)
    }
    return(
        <div className={`wrapper`+(opened ? 'open' : '')} onClick={closeBackdrop}></div>
    )
}

export default Backdrop;