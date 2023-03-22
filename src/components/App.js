import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail'; 
import background from '../images/harry.jpg'



function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectHouse, setSelectHouse] = useState('Gryffindor');
  const [selectStatus, setSelectStatus] = useState('all');

  useEffect(() => {
    getDataApi(`https://hp-api.onrender.com/api/characters/house/${selectHouse}`).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [selectHouse]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

  const handleSelectStatus = (value) => {
    setSelectStatus(value);
  };

  const handleReset = () => {
    setSearchName('');
    setSelectHouse('Gryffindor');
    setSelectStatus('all');
  }

  const sortedNames = characterList.sort((a,b) => a.name.localeCompare(b.name));

  const characterFiltered = sortedNames.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase());
  })
  .filter((eachCharacter) => {
    return eachCharacter.house === selectHouse
  })
  .filter((eachCharacter) => {
    if(selectStatus === 'alive'){
      return eachCharacter.status === true
    } else if (selectStatus === 'dead') {
      return eachCharacter.status === false
    }
    else return true
  })

  return(
       <div className='background' style={{ 
      backgroundImage: `url(${background})`}}>
        <header>
          <h1 className='header'>⚡ Choose your Harry Potter's character 🤓</h1>
        </header>
        <main className="main">
        <Routes>
          <Route path='/' 
            element={<>
              <Filters searchName={searchName} handleSearchName={handleSearchName} handleSelectHouse={handleSelectHouse} selectHouse={selectHouse} handleReset={handleReset} handleSelectStatus={handleSelectStatus} selectStatus={selectStatus}/>
              <CharacterList characterList={characterFiltered} searchName={searchName}/></>}/>
          <Route path='/character/:characterId' 
          element={<CharacterDetail characterList={characterList} setCharacterList={setCharacterList}/>}/> 
        </Routes>
      </main>
      </div>
    )
}

export default App;
