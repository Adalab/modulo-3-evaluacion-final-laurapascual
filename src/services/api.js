const getDataApi = (selectHouse) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${selectHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image || `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
          species: eachCharacter.species,
          id: eachCharacter.id,
          house: eachCharacter.house,
          status: eachCharacter.alive,
          gender: eachCharacter.gender,

        };
      });
      return cleanData;
    });
};
export default getDataApi;