import '../../styles/layouts/FilterStatus.scss';

const FilterStatus = ({selectStatus, handleSelectStatus }) => {
  const handleChange = (ev) => {
      const value = ev.target.value;
      handleSelectStatus(value);
    };
  return (
    <>
      <label htmlFor="status">
        Is alive?
      </label>
      <select
        className='select__status'
        name="status"
        id="status"
        onChange={handleChange}
        value={selectStatus}
      >
        <option value="all">All</option>
        <option value="alive">💓</option>
        <option value="dead">💀</option>
      </select>
    </>
  );
}
export default FilterStatus;