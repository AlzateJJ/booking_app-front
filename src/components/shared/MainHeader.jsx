import { Link } from 'react-router-dom'
import './styles/MainHeader.css'

const MainHeader = () => {
    return (

        <header className='mainHeader'>
            <h1 ><Link className='mainHeader__logo' to='/'>Hotels App</Link></h1>
            <nav className='mainHeader__nav'>
                <ul className='mainHeader__list'>
                    <li className='mainHeader__li' ><Link className='mainHeader__link' to = '/register'>Register</Link> </li>
                    <li className='mainHeader__li' ><Link className='mainHeader__link' to = '/login'>Log in</Link></li>
                    <li className='mainHeader__li' ><Link className='mainHeader__link' to = '/reservations'>Reservations</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader