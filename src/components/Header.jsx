// Images
import logo from '../assets/images/logo.svg'
import sun_logo from '../assets/images/icon-sun.svg'
import moon_logo from '../assets/images/icon-moon.svg'

// Utils
import { useEffect, useState } from 'react'
import './header.css'

const body = document.body

function Header() {
    const [darkMode, setDarkMode] = useState(body.classList.contains('dark_mode'))

    const toggle_mode = () => {
        setDarkMode(prev => !prev)
    }

    useEffect(() => {
        darkMode ? body.classList.add('dark_mode') : body.classList.remove('dark_mode')
    }, [darkMode])

    return (
        <header className='header'>
            <img src={logo} alt="Logo" />

            <button onClick={() => toggle_mode()}>
                <img src={darkMode ? sun_logo : moon_logo} alt="Change theme" />
            </button>
        </header>
    )
}

export default Header