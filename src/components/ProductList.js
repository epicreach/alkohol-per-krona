import "../styles/ProductList.css";
import React from "react";
import products from "../data/products.json";
import { useTable, useSortBy, usePagination } from "react-table";

function ProductList() {
  const data = React.useMemo(() => products, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "APK",
        accessor: "alkoholPerKrona",
        width: 100,
      },
      {
        Header: "Namn",
        accessor: "productNameBold",
        width: 250,
      },
      {
        Header: "Typ",
        accessor: "categoryLevel1",
        width: 140,
      },
      {
        Header: "Underkategori",
        accessor: "categoryLevel2",
        width: 180,
      },
      {
        Header: "Alkoholhalt",
        accessor: "alcoholPercentage",
        width: 60,
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex", alignItems: "center" }}>{value}%</div>
        ),
      },
      {
        Header: "Volym",
        accessor: "volume",
        width: 70,
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {value} ml
          </div>
        ),
      },
      {
        Header: "Pris",
        accessor: "price",
        width: 60,
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex", alignItems: "center" }}>{value}kr</div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const { pageIndex, pageSize } = state;
  // Sort the first column when the component mounts
  React.useEffect(() => {
    if (headerGroups.length > 0 && headerGroups[0].headers.length > 0) {
      const firstColumn = headerGroups[0].headers[0];
      firstColumn.toggleSortBy();
    }
  }, [headerGroups]);
  React.useEffect(() => {
    setPageSize(20);
  }, [setPageSize]);

  return (
    <div className="ProductList">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="table-header"
              >
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    {...column.getHeaderProps()}
                    {...(column.id === "alkoholPerKrona" ||
                    column.id === "alcoholPercentage" ||
                    column.id === "price"
                      ? column.getSortByToggleProps()
                      : {})}
                    style={{
                      minWidth: column.minWidth,
                      width: column.width,
                      maxWidth: column.maxWidth,
                    }}
                  >
                    {column.render("Header")}
                    <div>
                      {columnIndex === 1 && column.canFilter
                        ? column.render("Filter")
                        : null}
                    </div>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {page.map((rows) => {
              prepareRow(rows);
              return (
                <tr {...rows.getRowProps()} className="table-row">
                  {rows.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="table-data"
                        style={{ height: "20px" }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="selectDropdown">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Visa {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="tableNavbar">
          <div className="buttonGroup">
            <button
              className="firstlastButton"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<<"}{" "}
            </button>
            <button
              className="oneincButton"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
            <button
              className="oneincButton"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </button>
            <button
              className="firstlastButton"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>>"}{" "}
            </button>
          </div>
          <div className="pageNrContainer">
            <span>
              <strong className="pageNr">
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
