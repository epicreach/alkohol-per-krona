import React from "react";

export const VolumeFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <span>
      <select value={filterValue || ""} onChange={handleFilterChange}>
        <option value="">Alla</option>
        <option value="330">330 ml</option>
        <option value="500">500 ml</option>
        <option value="750">750 ml</option>
        <option value="1000">1000 ml</option>
      </select>
    </span>
  );
};
