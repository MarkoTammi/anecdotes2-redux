

// Component to render all anecdotes

import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    // Sort anecdotes by "votes". Most votes is the 1st.
    anecdotes.sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(addVote(anecdote.id)) }>vote</button>
                    </div>
                </div>
            )}
      </div>
  )
}

export default AnecdoteList