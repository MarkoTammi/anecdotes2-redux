

// Module /services/anecdotes.js to access db.json file
// Require json serveer to up and run 
// cmd "npm run server"

import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes:0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateVote = async (anecdote) => {
  const response = axios.put(`${baseUrl}/${anecdote.id}`, {content: anecdote.content, votes: anecdote.votes})
  //console.log('updateVote response.data',response )
  return response
}

export default { getAll, createNew, updateVote }