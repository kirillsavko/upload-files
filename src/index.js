import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from 'firebase/app';
import 'firebase/storage';

import MainView from './views/MainView';

import './assets/styles/base.scss';

const firebaseConfig = {
  apiKey: "AIzaSyAzYRMSAvl9SxW_R7YNDU_SgKtCDCcgOj4",
  authDomain: "upload-images-7bff4.firebaseapp.com",
  projectId: "upload-images-7bff4",
  storageBucket: "upload-images-7bff4.appspot.com",
  messagingSenderId: "564179587026",
  appId: "1:564179587026:web:38e7e55cb21a6c9638c20b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <MainView storage={storage} />
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
