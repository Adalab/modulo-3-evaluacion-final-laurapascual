import FilterName from "./FilterName";

function Filters({handleSearchName, searchName }) {
  return (
    <section>
      <form>
        <FilterName handleSearchName={handleSearchName} searchName={searchName}/>
      </form>
    </section>
  );
}
export default Filters;