import CharacterCard from './CharacterCard';

function ListCharacter({ characterList }) {
  const dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
    <section>
      <ul>{dataHtml}</ul>
    </section>
  );
}
export default ListCharacter;