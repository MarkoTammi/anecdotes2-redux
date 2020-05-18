

// notificationReducer


const notificationReducer = (state = '', action) => {
    //console.log('notificationReducer state : ', state)
    //console.log('notificationReducer action : ', action)
    switch(action.type) {
        case 'SET_MSG' :
          return state = action.notification
        case 'CLEAR_MSG' :
          return state = action.notification
        default:
          return state
    }
}
export default notificationReducer



export const setNotification = (notification) => {
  return {
    type: 'SET_MSG',
    notification: notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_MSG',
    notification: ''
  }
}

// Bofore 6.21 bug fix
/* export const setClearNotification = (msgToDisplay, timeInSec) => {
  return async dispatch => {

    dispatch(setNotification(msgToDisplay))

    const timeoutID = setTimeout(() => {
        dispatch(clearNotification('CLEAR_MSG'))
        }, timeInSec * 1000)

    console.log('timeoutId', timeoutID)
  }
} */


// Function to display notification if new anecddote is created or existing voted.
// timeoutId is global variable defined at global.js. Possible to update using timeoutId[0]
export const setClearNotification = (msgToDisplay, timeInSec, timeoutId) => {

  return (dispatch, getState) => {

    // Fetch all content from Store/state
    const state = getState()

    // If any msg is displayed by Notification component it's first cleared
    if (state.notification === '') {
        dispatch(setNotification(msgToDisplay))
    } else {
        clearTimeout(timeoutId[0])
        dispatch(setNotification(msgToDisplay))
    }

    //Global variable possible to update using timeoutId[0]
    timeoutId[0] = setTimeout(() => {
        dispatch(clearNotification('CLEAR_MSG'))
        //console.log('timeoutId CLEARED', timeoutId[0])
        }, timeInSec * 1000)
  }
}
