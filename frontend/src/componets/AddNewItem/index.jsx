import '../AddNewItem/style.css'
import React, { useEffect } from 'react';
import { useState } from 'react'
import moment from 'moment';
import { useGlobal } from '../../context/globalContext';

function AddNewItem() {
  const [nameCustomer, setNameCustomer] = useState('');
  const [nameSeller, setNameSeller] = useState('');
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');

  const {createBudget, closeModal, query, editBudget, getAll} = useGlobal()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nameCustomer || !nameSeller || !value || !date || !description) 
      alert('preencha os campos')
    try {
      if (query?.id) {
        await editBudget({id: query.id, nameCustomer, nameSeller, value, date, description})
        getAll()
        closeModal(false)
        return
      }
      await createBudget(nameCustomer, nameSeller, value, date, description)
      closeModal(false)
    } catch (error) {
      alert(error)
    }

  }

  useEffect(() => {
    if(query) {
      setNameCustomer(query.name_customer)
      setNameSeller(query.name_seller)
      setValue(query.value)
      setDate(query.date)
      setDescription(query.description)
    }
  },[])

  return (
    <div className='form'>
      <form onSubmit={ handleSubmit } >
        <div className="input-container">
          <label>Name cliente</label>
          <input type="text" value={nameCustomer} onChange={e => setNameCustomer(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Name vendedor</label>
          <input type="text" value={nameSeller} onChange={e => setNameSeller(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Data</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Valor</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Descrição</label>
          <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button className='btn-modal' type="submit">enviar</button>
      </form>
    </div>
  )
}

export default AddNewItem
