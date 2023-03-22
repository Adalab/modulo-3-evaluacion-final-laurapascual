import { Link, useLocation, matchPath } from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/layouts/CharacterDetail.scss';  

const CharacterDetail = ({characterList, setCharacterList}) => {
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
        <Link className='characterDetail__link' to={"/"}>Volver</Link>
        <main className='characterDetail'>
            <article className='characterDetail__article'>
                <img src={characterFound.photo} alt={`Foto de ${characterFound?.name}`}/>
                <div>
                <h2>{characterFound.name}</h2>
                <ul className='characterDetail__list'>
                    <li>Estatus: {characterFound.status ? 'Viv@' : 'Muert@'}</li>
                    <li>Especie: {characterFound.species}</li>
                    <li>Género: {characterFound.gender} </li>
                    <li>Casa: {characterFound.house}</li>
                </ul>
                </div>
            </article>
            </main></>)
        :  
        <p>No se ha encontrado el personaje</p> 
  );
};

export default CharacterDetail; 