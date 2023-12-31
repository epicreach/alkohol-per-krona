import React from "react";

export const SubTypeFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const optionsArray = [
    "Mellanmörk & Mörk lager",
    "Glögg och Glühwein",
    "Ale",
    "Ljus lager",
    "Cider",
    "Blanddryck",
    "Akvavit & Kryddat brännvin",
    "Annan öl",
    "Cognac",
    "Syrlig öl",
    "Porter & Stout",
    "Rött vin",
    "Rom & Lagrad sockerrörssprit",
    "Veteöl",
    "Whisky",
    "Vitt vin",
    "Mousserande vin",
    "Starkvin",
    "Rosévin",
    "Sake",
    "Anissprit",
    "Grappa & Marc",
    "Frukt & Druvsprit",
    "Punsch",
    "Smaksatt vin & fruktvin",
    "Calvados",
    "Tequila & Mezcal",
    "Smaksatt sprit",
    "Likör",
    "Aperitifer",
    "Gin & Genever",
    "Vermouth",
    "Armagnac & Brandy",
    "Vodka & Okryddat brännvin",
    "Bitter",
    "Drinkar & Cocktails",
    "Drycker av flera typer",
    "Vinlåda",
    "Sprit av flera typer",
  ];

  return (
    <span>
      <select value={filterValue || ""} onChange={handleFilterChange}>
        <option value="">Alla</option>
        {optionsArray.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
};
