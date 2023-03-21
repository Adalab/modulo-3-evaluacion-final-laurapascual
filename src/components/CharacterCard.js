function CharacterCard({ eachCharacter}) {
  return (
    <li>
      {/* <Link to={`/character/${eachCharacter.id}`}> */}
        <img
          src={eachCharacter.photo || `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`}
          alt={`Foto de ${eachCharacter.name}`}
          title={`Foto de ${eachCharacter.name}`}
        ></img>
        <h4>
          {eachCharacter.name} 
        </h4>
        <p>
          {eachCharacter.species} 
        </p>
      {/* </Link> */}
    </li>
  );
}
export default CharacterCard;