import { configureStore } from '@reduxjs/toolkit'
import randomReview from "./reducers/randomReview"
import counter from "./reducers/counter"
import defaultComment from './reducers/defaultComment'
import allReviews from './reducers/allReviews'


const store = configureStore({
    reducer:{counter,randomReview,defaultComment,allReviews}
})

export default store;