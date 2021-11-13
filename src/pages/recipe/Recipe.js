import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

// styles
import './Recipe.css'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
  const { mode } = useTheme()
  const { id } = useParams()
 
  const [recipe,setRecipe] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).on((doc) => {
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not fetch data please try again')
      }
    })
  },[id])

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
          <>
             <h2 className="page-title">{recipe.title}</h2>
             <p>Takes {recipe.cookingTime} to Cook.</p>
             <ul>
                {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
             </ul>
             <p className="method">{recipe.method}</p>
             <button onClick={handleClick}>Update me</button>
          </>
      )}
    </div>
  )
}