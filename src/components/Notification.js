
// Component to render what saved to the store.state.notification if any

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
    <div>
        { notification !== '' && <div style={style}>{notification}</div> }
    </div>
  )
}

export default Notification