import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail'; 


function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectHouse, setSelectHouse] = useState('all');

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

  const characterFiltered = characterList.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase());
  })
  .filter((eachCharacter) => {
    return selectHouse === 'all' ? true : eachCharacter.house === selectHouse
  })
  
  return(
       <div  /* style={{ 
      backgroundImage: `url(${header})`} */>
        <div className='background'/>
        <header>
          <h1 className='header'>⚡Elige tu personaje de Harry Potter🤓</h1>
        </header>
        <main className="main">
        <Routes>
          <Route path='/' 
            element={<>
              <Filters searchName={searchName} handleSearchName={handleSearchName} handleSelectHouse={handleSelectHouse}></Filters>
              <CharacterList characterList={characterFiltered}/></>}/>
          <Route path='/character/:characterId' 
          element={<CharacterDetail characterList={characterList}/>}/> 
        </Routes>
      </main>
      </div>
    )
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
