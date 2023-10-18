import '../Filter/style.css'
import { useGlobal } from '../../context/globalContext';
import { useState } from 'react';

function Filter() {
  const {getAll, setPage} = useGlobal()
    
  const [nameSellerFilter, setNameSellerFilter] = useState('');
  const [nameCustomerFilter, setNameCustomerFilter] = useState('');
  const [initialDateFilter, setInitialDateFilter] = useState('');
  const [finalDateFilter, setFinalDateFilter] = useState('');

  const clearFilter = async () => {
    setNameSellerFilter('');
    setNameCustomerFilter('');
    setInitialDateFilter('');
    setFinalDateFilter('');
    setPage(1)
    await getAll(1, {
      nameSellerFilter,
      nameCustomerFilter,
      initialDateFilter,
      finalDateFilter,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setPage(1)
      await getAll(1, {
        nameSellerFilter,
        nameCustomerFilter,
        initialDateFilter,
        finalDateFilter,
      })
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div className='filter-container'>
      <form onSubmit={ handleSubmit }>
        <div className='filter-container-input'>
          <input value={nameCustomerFilter} onChange={e => setNameCustomerFilter(e.target.value)} type="text" placeholder='Procurar pelo nome do cliente....'/>
          <input value={nameSellerFilter} onChange={e => setNameSellerFilter(e.target.value)} type="text" placeholder='Procurar pelo nome do vendedor....'/>
        </div>
        <div className='filter-container-input'>
          <p>Filtrar por data:</p>
          <input value={initialDateFilter} onChange={e => setInitialDateFilter(e.target.value)} type="date" /> 
          <p>ate</p>
          <input value={finalDateFilter} onChange={e => setFinalDateFilter(e.target.value)} type="date"/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button type='submit' className='btn-filter' >filtrar</button>
          <button onClick={ clearFilter } className='btn-filter'  >limpar filtro</button>
        </div>
      </form>
    </div>
  )
}

export default Filter
