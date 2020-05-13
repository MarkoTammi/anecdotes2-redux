

// Module to define store/state/actionCreator for filter 

const filterReducer = (state = '', action) => {
    //console.log('filterReducer state : ', state)
    //console.log('filterReducer action :', action)

    switch(action.type) {
        case 'SET_FILTERSTRING':
            return state = action.filterString
        default: 
            return state
    }
}


export const filterStr = (filterString) => {
    return {
      type: 'SET_FILTERSTRING',
      filterString: filterString
    }
}

export default filterReducer