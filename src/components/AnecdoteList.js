

// Component to render all anecdotes

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    // Sort anecdotes by "votes". Most votes is the 1st.
    anecdotes.sort((a, b) => b.votes - a.votes) 

    // String to filter anecdotes
    const filterString = useSelector(state => state.filter)
    console.log('AnecdoteList filterString', filterString)

    // To include only anecdotes which match with filterString. filterString is empty all names are displayed.
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterString.toLowerCase()))


    // Event handler for vote button
    const handleVoteButton = (id) => {
        // Set +1 for a voted anecdote
        dispatch(addVote(id))

        // Display notification for voted anecdote
        const votedAnecdote = anecdotes.filter(anecdote => anecdote.id === id)
        dispatch(setNotification('You voted : ' + votedAnecdote[0].content))
        // Clear notification
        setTimeout(() => {
            dispatch(clearNotification('CLEAR'))
            }, 5000)
    }

    return (
        <div>
{/*             {filterString === '' ? anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVoteButton(anecdote.id)}>vote</button>
                    </div>
                </div>
            ) : <p>test</p>} */}

{/*             {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVoteButton(anecdote.id)}>vote</button>
                    </div>
                </div>
            )} */}
           {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVoteButton(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
      </div>
  )
}

export default AnecdoteList