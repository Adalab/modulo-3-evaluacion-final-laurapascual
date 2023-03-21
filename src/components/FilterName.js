import '../styles/layouts/FilterName.scss';

function FilterName({ handleSearchName, searchName }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSearchName(value);
  };

  return (
    <>
      <label htmlFor="search">Busca por personaje:</label>
          <input
            className="form__input-text"
            autoComplete="off"
            type="search"
            name="search"
            value={searchName}
            onChange={handleChange}
        />
    </> 
  );
}
export default FilterName;