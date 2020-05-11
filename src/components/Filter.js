
// Component to render filter input field

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { filterStr } from '../reducers/filterReducer'

const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        console.log(event.target.value)
        dispatch(filterStr(event.target.value))

        // input-kentän arvo muuttujassa event.target.value
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter