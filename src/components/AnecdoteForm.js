

// Component to render "new anecdote" form

import React from 'react'

import anecdoteService from '../services/anecdotes'

import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification , clearNotification} from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  
  const dispatch = useDispatch()

  // Event handler for create button
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    // new anecdote's initial votes is 0
    // add new anecdote to db.json
    const newAnecdote = await anecdoteService.createNew(content, {votes:0})
    // dispatch new anecdote to redux/store/state 
    dispatch(createAnecdote(newAnecdote))

    // Display name of created anecdote in notification field
    dispatch(setNotification('You create "' + content + '" blog'))
    // And clear notification field after 5 sec.
    setTimeout(() => {
      dispatch(clearNotification('CLEAR'))
      }, 5000)
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