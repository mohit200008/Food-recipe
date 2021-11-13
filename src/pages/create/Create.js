import React, { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './Create.css'
import { projectFirestore } from '../../firebase/config'


export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient,setNewIngredient] =  useState('')
    const [ingredients,setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(title, method, cookingTime,ingredients)
        const doc = ({ title, ingredients, method,cookingTime: cookingTime + 'minutes' })

        try{
            await projectFirestore.collection('recipes').add(doc)
            history("/")
        } catch(err) {
            console.log(err)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if(ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients,ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    return (
        <div className="create">
            <h1 className="page-title">Add your Recipe</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(event) => setNewIngredient(event.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className="btn">Add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>


                <label>
                    <span>Recipe Method:</span>
                    <textarea
                        onChange={(event) => setMethod(event.target.value)}
                        required
                        value={method}
                    />
                </label>
                <label>
                    <span>Cooking Time(in Minutes):</span>
                    <input
                        type="number"
                        onChange={(event) => setCookingTime(event.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
