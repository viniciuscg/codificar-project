import React, { createContext, useContext, useState } from 'react'
import { BudgetServices } from '../services/budgetServices'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {

  const [budgets, setBudgets] = useState([])
  const [modal, setModal] = useState(false)
  const [query, setQuery] = useState({})
  const [pages, setPages] = useState(1)
  const [page, setPage] = useState(1)


  const createBudget = async (nameCustomer, nameSeller, value, date, description) => {
    const response = await BudgetServices.create(nameCustomer, nameSeller, value, date, description)
    setBudgets([...budgets, response])
  }

  const getAll = async (page, req = {}) => {
    const response = await BudgetServices.getAll(page, {
      nameSeller: req.nameSellerFilter,
      nameCustomer: req.nameCustomerFilter,
      initialDate: req.initialDateFilter,
      finalDate: req.finalDateFilter,
    })
    setBudgets(response.data)
    setPages(response.last_page)
  }

  const deleteBudget = async (id) => {
    await BudgetServices.delete(id)
    const filteredBudgets = budgets.filter(budget => budget.id !== id)
    setBudgets(filteredBudgets)
  
  }

  const editBudget = async (req) => {
    await BudgetServices.edit(req)
  }

  const openModal = (t, budget = null) => {
    setQuery(budget)
    setModal(t)
  }
  
  const closeModal = async (f) => {
    setModal(f)
  }

  return (
    <GlobalContext.Provider value={{
      budgets,
      createBudget,
      getAll,
      deleteBudget,
      modal,
      openModal,
      closeModal,
      query,
      editBudget,
      pages,
      setPage,
      page,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)