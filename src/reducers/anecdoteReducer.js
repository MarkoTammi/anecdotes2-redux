

// Module to define store/state/actionCreator for anecdotes


/*  
  // Was used to initialize anecdotes before db.json file exercise 6.13
  const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject) */


// Generates random ID for anecdote. Was used bofore new anecdote saved to db.json
//const getId = () => (100000 * Math.random()).toFixed(0)

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

export const addVote = (id) => {
  return {
    type: 'ADD',
    id: {id}
  }
}

export const createAnecdote = (data) => {
  //console.log('anecdoteReducer - createAnecdote',data)
  return {
    type: 'CREATE',
    data: {
      content: data.content,
      //id: getId(), // was used before anecdote was saved to db.json
      id: data.id ,
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default anecdoteReducer