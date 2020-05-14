

// Component to render all anecdotes

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification, setClearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    // Sort anecdotes by "votes". Most votes is the 1st.
    anecdotes.sort((a, b) => b.votes - a.votes) 

    // String to filter anecdotes
    const filterString = useSelector(state => state.filter)

    // To include only anecdotes which match with filterString. filterString is empty all names are displayed.
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterString.toLowerCase()))


    // Event handler for vote button
    const handleVoteButton = (anecdote) => {
        // Set +1 for a voted anecdote
        anecdote.votes = anecdote.votes + 1

        // Update json file and state
        dispatch(addVote(anecdote))

        // Display notification for voted anecdote
        const votedAnecdote = anecdotes.filter(n => n.id === anecdote.id)
        
        const msgToDisplay = 'You voted : ' + votedAnecdote[0].content + ' It has ' + (votedAnecdote[0].votes) + ' votes.'
        // content to display, time in sec to display
        dispatch(setClearNotification(msgToDisplay, 2))   
        
        // Was used before 6.18. Moved to notificationReducer
        /* dispatch(setNotification('You voted : ' + votedAnecdote[0].content + ' It has ' + (votedAnecdote[0].votes) + ' votes.'))
        // Clear notification
        setTimeout(() => {
            dispatch(clearNotification('CLEAR'))
            }, 5000) */
    }

    return (
        <div>
           {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVoteButton(anecdote)}>vote</button>
                    </div>
                </div>
            )}
      </div>
  )
}

export default AnecdoteList