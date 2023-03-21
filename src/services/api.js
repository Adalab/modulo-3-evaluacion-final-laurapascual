const getDataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image,
          species: eachCharacter.species,
          id:eachCharacter.id,
        };
      });
      return cleanData;
    });
};
export default getDataApi;