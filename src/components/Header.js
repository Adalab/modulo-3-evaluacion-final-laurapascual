import '../styles/layouts/Header.scss';  
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className='header'>
        <Link to={'/'}>Back to landing page</Link>
        <h1>⚡ Choose your Harry Potter's character 🤓</h1>
    </header>
    )
}

export default Header;