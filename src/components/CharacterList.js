import CharacterCard from './CharacterCard';
import '../styles/layouts/CharacterList.scss';

function characterList({ characterList, error }) {
  const dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });

  return (
    <section>
      <ul className='list'>{dataHtml}</ul>
      {error && <p className='error'>No hay personajes que coincidan con el criterio de búsqueda</p>}
    </section>
  );
}
export default characterList;