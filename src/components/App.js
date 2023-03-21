import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';


function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const characterFiltered = characterList.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase());
  })
  
  return(<>
      <h1>Harry Potter</h1>
      <main className="main">
        <Filters searchName={searchName} handleSearchName={handleSearchName}></Filters>
        <CharacterList characterList={characterFiltered}/>
      </main>
    </>)
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
