function CharacterCard({ eachCharacter}) {
  return (
    <li>
      {/* <Link to={`/character/${eachCharacter.id}`}> */}
        <img
          src={eachCharacter.photo}
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