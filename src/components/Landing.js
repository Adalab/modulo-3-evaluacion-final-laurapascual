import { Link } from 'react-router-dom';
import harry from '../images/landing.png';
import owl from '../images/owl.png';
import '../styles/layouts/Landing.scss'; 

const Landing = () => {
    return (
    <div className='landing'>
        <h1 className='landing__title'>Start and choose your character</h1>
        <small className='landing__subtitle'>* Press Hedwig (Harry's owl) *</small>
        <Link to={'/list'}><img className='landing__icon' src={owl} alt='Owl'/></Link>
        <img className='landing__img' src={harry} alt='Harry Potter'/>
        
    </div>
    )
}

export default Landing;