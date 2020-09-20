importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDcuaYferp3vzVC6LZkXdhK7hyz2ojfhnI",
    authDomain: "expensenotification-8b7c4.firebaseapp.com",
    databaseURL: "https://expensenotification-8b7c4.firebaseio.com",
    projectId: "expensenotification-8b7c4",
    storageBucket: "expensenotification-8b7c4.appspot.com",
    messagingSenderId: "496971091598",
    appId: "1:496971091598:web:482f6230352f5384de83df"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();