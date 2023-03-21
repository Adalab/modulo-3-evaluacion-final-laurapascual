import CharacterCard from './CharacterCard';
import '../styles/layouts/CharacterList.scss';

function characterList({ characterList }) {
  const dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });

  return (
    characterList.length > 0
    ?
    (<section>
      <ul className='list'>{dataHtml}</ul>
    </section>)
    :
    <p className='error'>No hay personajes que coincidan con el criterio de búsqueda</p>
  );
}
export default characterList;