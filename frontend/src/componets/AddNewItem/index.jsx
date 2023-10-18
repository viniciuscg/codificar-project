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

  const {createBudget, closeModal, selectedBudget, editBudget, getAll} = useGlobal()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nameCustomer || !nameSeller || !value || !date || !description) 
      alert('Preencha os campos')
    try {
      if (selectedBudget?.id) {
        await editBudget({id: selectedBudget.id, nameCustomer, nameSeller, value, date, description})
        getAll()
        closeModal(false)
        return
      }
      await createBudget(nameCustomer, nameSeller, value, date, description)
      closeModal(false)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    if(selectedBudget) {
      setNameCustomer(selectedBudget.name_customer)
      setNameSeller(selectedBudget.name_seller)
      setValue(selectedBudget.value)
      setDate(selectedBudget.date)
      setDescription(selectedBudget.description)
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
