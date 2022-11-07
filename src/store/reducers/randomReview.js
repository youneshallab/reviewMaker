import { GET_USERS_SUCCESS } from "../actions";

const randomReviewReducer = ( state = {
    firstName: "",
    lastName: "",
    country: "",
    age: "",
    review: "",
    rating: 0
  }, action ) => {
    switch(action.type){
        case 'GET_USERS_SUCCESS':
            return {
              firstName: action.users.results["0"].name.first,
              lastName: action.users.results["0"].name.last,
              country: action.users.results["0"].location.country,
              age: action.users.results["0"].dob.age,
              review: defaultComment.slice(0,Math.floor(Math.random()*113+2)),
              rating: Math.floor(Math.random()*6),
            };
        default:
            return state;
    }
  }

export default randomReviewReducer;