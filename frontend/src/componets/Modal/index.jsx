import React from 'react';
import '../Modal/style.css'
import AddNewItem from '../AddNewItem';
import { GrFormClose } from 'react-icons/gr'
import { useGlobal } from '../../context/globalContext';

function Modal() {
  const {closeModal} = useGlobal()

  return (
    <div className='container-modal'>
      <span onClick={() => closeModal(false)} style={{ cursor: 'pointer' }}><GrFormClose size={20} /></span>
      <AddNewItem closeModal={() => closeModal(false)}/>
    </div>
  )
}

export default Modal
