import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import {TransactionType,initialStateType } from './../Types/types'
// type TransactionType = {
//   id: string;
//   product: string;
//   amount: number;
// }

// type initialStateType = {
//   buyandsellitems: {
//     id: string;
//     product: string;
//     amount: number;
//   }[];
//   deleteBuyandSellItem: (id: string) => void;
//   addBuyandSellItem: (transaction: TransactionType) => void;
// };


const iState : initialStateType={
  buyandsellitems: [],
  deleteBuyandSellItem: () => {},
  addBuyandSellItem : () => {}

}


export const GlobalContext = createContext(iState)


export const GlobalProvider : React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, iState);

  
  function deleteBuyandSellItem(id:string) {
    dispatch({
      type: 'BUY_AND_SELL_ITEM_DELETE',
      payload: id
    });
  }

  function addBuyandSellItem(transaction:TransactionType) {
    dispatch({
      type: 'BUY_AND_SELL_ITEM_ADD',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider 

  value={{
    buyandsellitems: state.buyandsellitems,
    deleteBuyandSellItem,
    addBuyandSellItem
  }} >

    {children}

  </GlobalContext.Provider>);
}