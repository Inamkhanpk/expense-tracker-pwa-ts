export type TransactionType = {
  id: string;
  product: string;
  amount: number;
}
export type initialStateType = {
  buyandsellitems: {
    id: string;
    product: string;
    amount: number;
  }[];
  deleteBuyandSellItem: (id: string) => void;
  addBuyandSellItem: (transaction: TransactionType) => void;
};

export type Actions =
  | { type: "BUY_AND_SELL_ITEM_DELETE"; payload: string }
  | { type: "BUY_AND_SELL_ITEM_ADD"; payload: TransactionType };

 