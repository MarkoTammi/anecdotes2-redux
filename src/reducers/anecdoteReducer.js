

// Module to define store/state/actionCreator for anecdotes

import anecdoteService from '../services/anecdotes'


const anecdoteReducer = (state = [], action) => {
  //console.log('anecdoteReducer state: ', state)
  //console.log('anecdoteReducer action:', action)
  switch(action.type) {
    // Add votes for anecdote
    case 'ADD' :
      const id = action.id.id
      const anecdoteToGiveVote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToGiveVote, votes: anecdoteToGiveVote.votes + 1
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


export const addVote = (id) => {
  return {
    type: 'ADD',
    id: {id}
  }
}


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