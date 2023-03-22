import '../styles/layouts/FilterName.scss';

function FilterName({ handleSearchName, searchName, error }) {
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
            placeholder='Ex. Harry Potter'
            value={searchName}
            onChange={handleChange}
        />
    </> 
  );
}
export default FilterName;