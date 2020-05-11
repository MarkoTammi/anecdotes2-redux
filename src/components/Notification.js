
// Component to render what saved to the store.state.notification

import React from 'react'

import { useSelector } from 'react-redux'

const Notification = () => {

  const notication = useSelector(state => state.notication)
  console.log('notication', notication)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  return (
    <div style={style}>
      {notication}
    </div>
  )
}

export default Notification