import '../../styles/layouts/FilterName.scss';

const FilterName = ({ handleSearchName, searchName}) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSearchName(value);
  };

  return (
    <>
      <label htmlFor="search">Search by name:</label>
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