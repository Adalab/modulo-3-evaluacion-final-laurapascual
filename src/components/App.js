import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';



/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return(<>
      <h1>Harry Potter</h1>
      <main className="main">
         <CharacterList characterList={characterList}/>
      </main>
    </>)
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
