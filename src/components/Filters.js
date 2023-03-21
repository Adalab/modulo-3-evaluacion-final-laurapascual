import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({handleSearchName, searchName, handleSelectHouse}) {
  return (
    <section>
      <form>
        <FilterName handleSearchName={handleSearchName} searchName={searchName}/>
        <FilterHouse handleSelectHouse={handleSelectHouse}/>
      </form>
    </section>
  );
}
export default Filters;