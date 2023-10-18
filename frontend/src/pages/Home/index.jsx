import { useEffect } from 'react'
import Filter from '../../componets/Filter/index'
import React from 'react';
import Table from '../../componets/Table/index';
import '../Home/style.css'
import Modal from '../../componets/Modal';
import { useGlobal } from '../../context/globalContext';

function Home() {
  const { getAll, openModal, modal } = useGlobal()

  useEffect(() => {
    getAll()
  },[])

  return (
    <div className='container'>
      <div className='functions-class'>
        <button className='btn-addnewitem'  onClick={() => openModal(true)}>Adicionar novo orçamento</button>
        <Filter/>
      </div>
        <Table />
        {modal &&
          <Modal />
        }
    </div>
  )
}

export default Home
