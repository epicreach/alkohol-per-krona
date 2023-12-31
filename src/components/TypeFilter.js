import React from "react";

export const TypeFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <span>
      <select value={filterValue || ""} onChange={handleFilterChange}>
        <option value="">Alla</option>
        <option value="Öl">Öl</option>
        <option value="Vin">Vin</option>
        <option value="Sprit">Sprit</option>
        <option value="Cider">Cider</option>
      </select>
    </span>
  );
};
