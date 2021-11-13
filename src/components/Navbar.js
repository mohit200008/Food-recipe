
import { Link } from 'react-router-dom'
import './Navbar.css'
import { SearchBar } from './SearchBar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
    const { color,changeColor } = useContext(ThemeContext)
    return (
        <div className="navbar" style={{ background: color }}>
            <nav onClick={()=> changeColor('green')}>
               <Link to="/" className="brand">
                  <h1>Cooking Ninja</h1>
               </Link> 
               <SearchBar />
               <Link to="/create">Create Recipe</Link>
               
               {
            //    <Link to="/">Create Recipe</Link>
            //    <Link to="/">Create Recipe</Link>
               }
            </nav>
        </div>
    )
}
