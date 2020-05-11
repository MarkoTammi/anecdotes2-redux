
// Component to render what saved to the store.state.notification

import React from 'react'

import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notification)
  //console.log('notication', notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification