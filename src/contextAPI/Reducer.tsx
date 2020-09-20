import {TransactionType,Actions} from './../Types/types'

// type TransactionType = {
//   id: string;
//   product: string;
//   amount: number;
// }

// type Actions =
//   | { type: "BUY_AND_SELL_ITEM_DELETE"; payload: string }
//   | { type: "BUY_AND_SELL_ITEM_ADD"; payload: TransactionType };

export default (state: {buyandsellitems : TransactionType[]; }, action: Actions) => {
    switch(action.type) {
      case 'BUY_AND_SELL_ITEM_DELETE':
        return {
          ...state,
          buyandsellitems: state.buyandsellitems.filter(items => items.id !== action.payload)
        }
      case 'BUY_AND_SELL_ITEM_ADD':
        return {
          ...state,
          buyandsellitems: [action.payload, ...state.buyandsellitems]
        }
      default:
        return state;
    }
  }