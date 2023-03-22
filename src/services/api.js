import user from '../images/user.png';

const getDataApi = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image || user,
          species: eachCharacter.species,
          id: eachCharacter.id,
          house: eachCharacter.house,
          status: eachCharacter.alive,
          gender: eachCharacter.gender,
          alternateNames: eachCharacter.alternate_names,
        };
      });
      return cleanData;
    });
};
export default getDataApi;