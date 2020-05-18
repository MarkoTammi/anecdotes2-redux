

// Component to render "new anecdote" form

import React from 'react'

import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setClearNotification} from '../reducers/notificationReducer'
import { timeoutId } from '../global'


const AnecdoteForm = () => {
  
  const dispatch = useDispatch()

  // Event handler for create button
  const handleCreateAnecdoteButton = async (event) => {

    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    // Save new anecdote to db.json and state
    dispatch(createAnecdote(content))

    // Display name of created anecdote in notification field
    const msgToDisplay = 'You create "' + content + '" blog'
    // content to display, time in sec to display
    dispatch(setClearNotification(msgToDisplay, 5, timeoutId))  
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleCreateAnecdoteButton}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm