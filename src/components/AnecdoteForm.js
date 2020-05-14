

// Component to render "new anecdote" form

import React from 'react'

import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification , clearNotification, setClearNotification} from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  
  const dispatch = useDispatch()

  // Event handler for create button
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    // Save new anecdote to db.json and state
    dispatch(createAnecdote(content))

    // Display name of created anecdote in notification field
    const msgToDisplay = 'You create "' + content + '" blog'
    // content to display, time in sec to display
    dispatch(setClearNotification(msgToDisplay, 2))  

    // Was used before 6.18. Moved to notificationReducer
/*     dispatch(setNotification('You create "' + content + '" blog'))
    // And clear notification field after 5 sec.
    setTimeout(() => {
      dispatch(clearNotification('CLEAR'))
      }, 5000) */
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm