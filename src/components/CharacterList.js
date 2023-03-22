import CharacterCard from './CharacterCard';
import Error from './Error';
import '../styles/layouts/CharacterList.scss';

const characterList = ({characterList, searchName}) => {
  if(characterList.length === 0 && searchName !== '') {
    return <Error/> };  

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