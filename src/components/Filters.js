import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import '../styles/layouts/Filters.scss';
import FilterStatus from "./FilterStatus";

function Filters({handleSearchName, searchName, handleSelectHouse, handleReset, selectHouse, handleSelectStatus, selectStatus}) {
   const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form className="form__filters" onSubmit={handleSubmit}>
        <FilterName handleSearchName={handleSearchName} searchName={searchName} />
        <FilterHouse handleSelectHouse={handleSelectHouse} selectHouse={selectHouse}/>
        <FilterStatus handleSelectStatus={handleSelectStatus} selectStatus={selectStatus}/>
        <input type="button" value="Reset" onClick={handleReset} className='btn__reset'/>      
      </form>
    </section>
  );
}
export default Filters;