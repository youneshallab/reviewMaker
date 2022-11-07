import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import randomReview from "./store/reducers/randomReview"
import counter from "./store/ reducers/counter"
import defaultComment from './store/reducers/defaultComment'
import allReviews from './store/reducers/allReviews'
import createSagaMiddleware from '@redux-saga/core'
import mySaga from '../store/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {reducer:{counter,randomReview,defaultComment,allReviews}},
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);

