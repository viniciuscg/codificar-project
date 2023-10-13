import { api } from "./api";

export class BudgetServices {

  static async create(nameCustomer, nameSeller, value, date, description) {
    try {
      const response = await api.post('/budget', {nameCustomer, nameSeller, value, date, description})
      return response.data
    } catch (error) {
      throw new Error(error.message)
    }   
  } 
    
  static async getAll(page = 1, {nameSeller, nameCustomer, initialDate, finalDate}) {
    const queryNameSeller = nameSeller ? `&nameSeller=${nameSeller}` : ''
    const queryNameCustomer = nameCustomer ? `&nameCustomer=${nameCustomer}` : ''
    const queryDates = (initialDate && finalDate) ? `&initiaDate=${initialDate}&finalDate=${finalDate}}` : ''
    
    const response = await api.get(`/budget?page=${page}${queryNameSeller}${queryNameCustomer}${queryDates}`)
    return response.data
  }     
  
  static async delete(id) {
    const response = await api.delete(`/budget/${id}`)
    return response.data
  }

  static async edit(budget) {
    const response = await api.post(`/budget/${budget.id}`, budget)
    return response.data
  }

}