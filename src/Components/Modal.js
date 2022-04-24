import React, {useState} from 'react'
import '../styles/Modal.scss'
import { FaPlus } from 'react-icons/fa'

const Modal = ({setShowModal}) => {

  const [number, setNumber] = useState(10);

  const interval = setInterval(() => {
    setNumber(number - 1)
  }, 1000)
 
    if (number === 0) {
      clearInterval(interval);
      setShowModal(false)   
    }
  return (
    <div className='background'>
      <div className="modal">
        <h1>Merci, à bientot !</h1>
        <FaPlus className='close' onClick={() => setShowModal(false)}/>
          <small className='number'>Retour à l'acceuil dans {number}</small>
      </div>
    </div>
  )
}

export default Modal