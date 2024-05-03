import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {addCustomerAction, removeCustomerAction} from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <>
      <div className='app'>
        <div>{cash}</div>
        <div>
          <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
          <button onClick={() => getCash(Number(prompt()))}>Withdraw cash</button>

          <button onClick={() => addCustomer(prompt())}>Add customer</button>
          <button onClick={() => dispatch(fetchCustomers())}>Get customers from database</button>
        </div>
        {customers.length > 0 ? 
          <div>
            {
              customers.map((customer) => <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>)
            }
          </div>
          :
          <div>
            Customers are absend!
          </div>
        }
      </div>
    </>
  )
}

export default App
