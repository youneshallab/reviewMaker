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