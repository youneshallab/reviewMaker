const allReviews = (state = [],action) => {
    switch(action.type){
        case 'ADDREVIEW':
            return [...state,action.payload]
        default:
            return state
    }
}

export default allReviews;