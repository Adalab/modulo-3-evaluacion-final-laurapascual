function FilterHouse({ handleSelectHouse }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSelectHouse(value);
  };

  return (
    <>
      <label htmlFor="houses">
        Selecciona la casa:
      </label>
      <select
        name="houses"
        id="houses"
        onChange={handleChange}
      >
        <option value="all">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin </option>
        <option value="Hufflepuff">Hufflepuff </option>
        <option value="Ravenclaw">Ravenclaw </option>
      </select>
    </>
  );
}
export default FilterHouse;