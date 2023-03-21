import { Link, useLocation, matchPath } from 'react-router-dom';

const CharacterDetail = ({characterList}) => {
  const { pathname } = useLocation(); 
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : null;
  const characterFound = characterList.find((character) => character.id === characterId);
  

  return (
    <main>
      <article>
        <img src={characterFound.photo} alt={`Foto de ${characterFound.name}`}/>
        <div>
          <h2>{characterFound.name}</h2>
          <ul>
            <li>Estatus: {characterFound.status ? 'Viv@' : 'Muert@'}</li>
            <li>Especie: {characterFound.species}</li>
            <li>Género: {characterFound.gender} </li>
            <li>Casa: {characterFound.house}</li>
          </ul>
        </div>
      </article>
      <Link to={"/"}>Volver</Link>
    </main>
  );
};

export default CharacterDetail; 