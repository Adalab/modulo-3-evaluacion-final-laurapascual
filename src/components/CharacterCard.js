import { Link } from "react-router-dom"; 
import '../styles/layouts/CharacterCard.scss';

function CharacterCard({ eachCharacter}) {
  return (
    <Link className="card__link" to={`/character/${eachCharacter.id}`}> 
        <li className="card">
            <img
            className='character__image'
            src={eachCharacter.photo}
            alt={`Foto de ${eachCharacter.name}`}
            title={`Foto de ${eachCharacter.name}`}
            ></img>
            <h4 className="card__title">
            {eachCharacter.name} 
            </h4>
            <p className="card__subtitle">
            {eachCharacter.species} 
            </p>
        </li>
    </Link>  
    
  );
}
export default CharacterCard;