export const add = () => {
    return {
        type: 'ADD'
    }
}

export const update = ({firstName,lastName,country,age,review,rating}) => {
    return {
        type: 'UPDATE',
        payload: {firstName,lastName,country,age,review,rating}
    }
}

export const addreview = (review) => {
    return {
        type: 'ADDREVIEW',
        payload: review
    }
}

export const GET_USERS_FETCH = "GET_USERS_FETCH"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"


export const getUsersFetch = () => {
    type: GET_USERS_FETCH;
}