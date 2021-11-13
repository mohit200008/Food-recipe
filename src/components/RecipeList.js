import React from 'react'
import './RecipeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/delete_black_24dp.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ data }) {
    const { mode } = useTheme()

    if (data.length === 0) {
        return <div className="error">No Recipes to load.....</div>
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }
    return (
        <div className="recipe-list">
            {
                data.map(recipe => (
                    <div className={`card ${mode}`} key={recipe.id}>
                       <h3>{recipe.title}</h3>
                       <p>{recipe.cookingTime}</p>
                       <div>{recipe.method.substring(0,100)}...</div>
                       <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                       <img 
                          className="delete"
                          src={Trashcan}
                          onClick={()=> handleClick(recipe.id)}
                          alt="delete"
                       />
                    </div>
                ))
            }
        </div>
    )
}
