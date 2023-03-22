import { Link, useLocation, matchPath } from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/layouts/CharacterDetail.scss';  
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';

const CharacterDetail = ({characterList, setCharacterList}) => {

  const houseUrl = {
    gryffindor: gryffindor,
    hufflepuff: hufflepuff,
    ravenclaw: ravenclaw,
    slytherin: slytherin
  }  

  const { pathname } = useLocation(); 
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const characterFound = characterList.find((character) => character.id === characterId);

   if(!characterFound) {
    getDataApi('https://hp-api.onrender.com/api/characters').then((cleanData) => {
    setCharacterList(cleanData);
    });
  } 

  return (
    characterFound 
        ?
            (
            <>
            <Link className='characterDetail__link' to={"/"}>🡨 Volver</Link>
            <main className='characterDetail'>
                <article className='characterDetail__article'>
                    <img className='characterDetail__image' src={characterFound.photo} alt={`Foto de ${characterFound?.name}`}/>
                    <div>
                    <h2>{characterFound.name}</h2>
                    <ul className='characterDetail__list'>
                        <li>Status: {characterFound.status ? '💓' : '💀'}</li>
                        <li>Species: {characterFound.species}</li>
                        <li>Gender: {characterFound.gender} </li>
                        {characterFound.alternateNames.length !== 0 ? <li>Alternate names: {characterFound.alternateNames}</li> : <li></li>}                        
                        <li>House: {characterFound.house}</li>
                        <img className='characterDetail__houses' src={houseUrl[characterFound.house.toLowerCase()]} alt={characterFound.house}/>
                    </ul>
                    </div>
                </article>
                </main></>)
        :  
        (<><p className='characterDetail__error'>No se ha encontrado el personaje</p> 
        <Link className='characterDetail__link' to={"/"}>🡨 Volver</Link></>)
  );
};

export default CharacterDetail; 