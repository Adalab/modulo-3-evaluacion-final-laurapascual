import { Link } from "react-router-dom"; 
import '../styles/layouts/CharacterCard.scss';

function CharacterCard({ eachCharacter}) {
  return (
    <li>
      <Link to={`/character/${eachCharacter.id}`}> 
        <img
        className='character__image'
          src={eachCharacter.photo}
          alt={`Foto de ${eachCharacter.name}`}
          title={`Foto de ${eachCharacter.name}`}
        ></img>
        <h4>
          {eachCharacter.name} 
        </h4>
        <p>
          {eachCharacter.species} 
        </p>
       </Link>  
    </li>
  );
}
export default CharacterCard;