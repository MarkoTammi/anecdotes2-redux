

// Module to define store/state/actionCreator for anecdotes

import anecdoteService from '../services/anecdotes'


const anecdoteReducer = (state = [], action) => {
  //console.log('anecdoteReducer state: ', state)
  //console.log('anecdoteReducer action:', action)
  switch(action.type) {
    // Add votes for anecdote
    case 'ADD' :
      const id = action.id
      const anecdoteToGiveVote = state.find(anecdote => anecdote.id.id === id)
      const changedAnecdote = {
        ...anecdoteToGiveVote, votes: anecdoteToGiveVote.votes
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)

    // Create new anecdote
    case 'CREATE':
      return [...state, action.data]

    // Initialize anecdotes
    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

// ACTION CREATORS

// Was used before redux-thunk
/* export const addVote = (id) => {
  return {
    type: 'ADD',
    id: {id}
  }
}  */

// Update votes -parameter
export const addVote = (content) => {
  return async dispatch => {
    await anecdoteService.updateVote(content)
    dispatch(
      {
        type: 'ADD',
        data: {
          votes: content.votes,
          id: content.id
        }
      }
    )
  }
}

// Create new anecdote
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(
      {
        type: 'CREATE',
        data: {
          content: newAnecdote.content,
          id: newAnecdote.id,
          votes: 0
        }
      }
    )
  }
}

// Initialize all necdotes at setup
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(
      {
        type: 'INIT_ANECDOTES',
        data: anecdotes
      }
    )
  }
}

export default anecdoteReducer