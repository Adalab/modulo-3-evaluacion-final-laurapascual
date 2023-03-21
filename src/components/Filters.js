import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import '../styles/layouts/Filters.scss';

function Filters({handleSearchName, searchName, handleSelectHouse, error}) {
   const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form className="form__filters" onSubmit={handleSubmit}>
        <FilterName handleSearchName={handleSearchName} searchName={searchName} />
        <FilterHouse handleSelectHouse={handleSelectHouse}/>
      </form>
    </section>
  );
}
export default Filters;