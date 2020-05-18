

// notificationReducer

import { useSelector } from "react-redux"


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

export const setClearNotification = (msgToDisplay, timeInSec) => {
  return async dispatch => {

/*    const notif = useSelector(state => state.notification)
    console.log('setClearNotif', notif)

     if (notif !== '') {
        clearTimeout(timeoutID)
        dispatch(setNotification(msgToDisplay))
    } else {
        dispatch(setNotification(msgToDisplay))
    } */

    dispatch(setNotification(msgToDisplay)) // This away if/when above works


    const timeoutID = setTimeout(() => {
        dispatch(clearNotification('CLEAR_MSG'))
        }, timeInSec * 1000)

    console.log('timeoutId', timeoutID)
  }
}



export default notificationReducer