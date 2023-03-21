import CharacterCard from './CharacterCard';
import '../styles/layouts/CharacterList.scss';

function characterList({ characterList }) {
  const dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
    <section>
      <ul className='list'>{dataHtml}</ul>
    </section>
  );
}
export default characterList;