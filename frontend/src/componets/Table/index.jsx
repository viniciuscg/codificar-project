import '../Table/styles.css'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import Pagination from '@mui/material/Pagination';
import moment from 'moment/moment';
import Modal from '../Modal/index'
import { useGlobal } from '../../context/globalContext';

function Table() {

  const {budgets, deleteBudget, modal, openModal, pages, setPage, page, getAll } = useGlobal()
  const showHideClassName = modal ? 'show-modal' : 'hide-modal'

  const handleChangePage = (event, value) => {
    setPage(value)
    getAll(value)
  };

  return (
    <div className='container-table'>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>id</th>
            <th>Cliente</th>
            <th>Vendedor</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Funções</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => (
            <tr className="active-row">
              <td>{budget.id}</td>
              <td>{budget.name_customer}</td>
              <td>{budget.name_seller}</td>
              <td>{budget.description}</td>
              <td>{moment(budget.date).format('DD/MM/YYYY')}</td>
              <td>R$ {budget.value}</td>
              <td style={{ display: 'flex', gap: '10px'}}>
                <button onClick={() => openModal(true, budget)} className='btn-edit'><FiEdit style={{ fontSize: '20px' }}/></button>
                <button onClick={() => deleteBudget(budget.id)} className='btn-delete'><MdDeleteForever style={{ fontSize: '20px' }}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={pages} page={page} onChange={handleChangePage} />
      
      <div className={showHideClassName} >
        <Modal/>
      </div>
    </div>
  )
}

export default Table
