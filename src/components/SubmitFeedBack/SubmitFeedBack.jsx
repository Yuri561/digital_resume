import './SubmitFeedBack.css';
import React, {useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt';

const SubmitFeedBack = () => {
       useEffect(() => {
         VanillaTilt.init(document.getElementById("submit"), {
           max: 25,
           speed: 400,
           glare: true,
           "max-glare": 0.5,
         });
       }, []);
  return (
    <div className='container mt-2 text-center'>
      {/* Button trigger modal */}
      <button
        id='submit'
        type='button'
        className='btn sub'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdrop'>
        Submit Feedback
      </button>

      {/* Modal */}
      <div
        className='modal fade '
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'>
        <div className='modal-dialog dialog-center '>
          <div className='modal-content bg-dark rounded'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5 text-light'
                id='staticBackdropLabel'>
                Leave a Feedback
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitFeedBack
