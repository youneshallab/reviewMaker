const randomReviewReducer = ( state = {
    firstName: "",
    lastName: "",
    country: "",
    age: "",
    review: "",
    rating: 0
  }, action ) => {
    switch(action.type){
        case 'UPDATE':
            return {...action.payload};
        default:
            return state;
    }
  }

export default randomReviewReducer;