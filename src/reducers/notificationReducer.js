

// notificationReducer


const notificationReducer = (state = '', action) => {
    console.log('notificationReducer state : ', state)
    console.log('notificationReducer action : ', action)
    switch(action.type) {
        case 'SET' :
          console.log('SET case')
          return state = action.notification
        case 'CLEAR' :
          return state = action.notification
        default:
          return state
    }
}

export const setNotification = (notification) => {
  return {
    type: 'SET',
    notification: notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
    notification: ''
  }
}

export default notificationReducer