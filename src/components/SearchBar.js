import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchBar.css'

export const SearchBar = () => {
    const [ term,setTerm] = useState('')
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        history(`/search?q=${term}`)

        // if(term.length() === 0){
        //     history("/")
        // }
    }
    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input 
                  type="text"
                  id="search"
                  onChange={(event)=> setTerm(event.target.value)}
                />
            </form>
        </div>
    )
}
