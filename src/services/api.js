const getDataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image,
          species: eachCharacter.species,
          id:eachCharacter.id,
          house:eachCharacter.house,
        };
      });
      return cleanData;
    });
};
export default getDataApi;