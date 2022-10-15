import React from 'react'

export default function LoginModal({ isvisible, onClose, children }) {
    if (!isvisible) return null;

    const handleClose = (e) => {
        if( e.target.id === "wrapper") onClose();
    }
    return (
     <>
     <div id="wrapper" onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div>{children}</div>
     </div>
     </>
    );
  }