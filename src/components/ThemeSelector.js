import {useTheme} from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'
import './ThemeSelector.css'

const themeColors = ['#58249c', '#E6425E', '#02B290']

export default function ThemeSelector() {
    const { changeColor,changeMode,mode } = useTheme()
    

    const toggleMode = () => {
        changeMode(mode === 'dark'? 'light': 'dark')
    }
    console.log(mode)
    return (
        <div className="theme-selector">
            <div className="mode-toggle">
               <img src={modeIcon} alt="toggle icon" onClick={toggleMode} style={{ filter: mode === 'dark' ? 'invert(100%)': 'invert(20%'}} />
            </div>
            <div className="theme-buttons">
               {
                   themeColors.map(color => (
                       <div 
                          key={color}
                          onClick={()=> changeColor(color)}
                          style={{ background: color}}
                       />
                   ))}
            </div>
        </div>
    )
}
