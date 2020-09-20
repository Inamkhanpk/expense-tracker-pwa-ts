import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeAndExpense } from './components/IncomeAndExpense';
//import  { Footer } from './components/Footer'
 import { GlobalProvider } from './contextAPI/GlobalState';
import { BuyAndSellItemList } from './components/BuyAndSellItemList';
import { AddBuyandSellItems } from './components/AddBuyandSellItems';
import { firebase } from "./services/firebaseService";
import './App.css'
function App() {
  const firebaseMessaging = () => {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then((currentToken:any) => {
        if (currentToken) {
          console.log("Token:", currentToken);
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      }).catch((err:any) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    })
  }
  firebaseMessaging();
  return (
    <GlobalProvider>
      <Header/>
    <div >
     <Balance/>
     <IncomeAndExpense/>
     <BuyAndSellItemList/>
     <AddBuyandSellItems/>
     </div>
    {/* <Footer/> */}
    
    </GlobalProvider>
  );
  }

export default App;