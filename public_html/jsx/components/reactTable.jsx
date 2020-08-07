import React from 'react';
import { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { DISPLAY_MODE } from "../utils/variables.jsx";

export default function RTable (props) {

  // const data = React.useMemo(
    // () => [
      // {
        // col1: 'Hello',
        // col2: 'World',
      // },
      // {
        // col1: 'react-table',
        // col2: 'rocks',
      // },
      // {
        // col1: 'whatever',
        // col2: 'you want',
      // },
    // ],
    // []
  // )

   const data = useMemo(
    (d = props.data) => d //Poistettu [] , jolloin päivittää taulukon aina kun data muuttuu
    //(d = props.data) => d, []
  )
  
  // const columns = React.useMemo(
    // () => [
      // {
        // Header: 'Column 1',
        // accessor: 'col1', // accessor is the "key" in the data
      // },
      // {
        // Header: 'Column 2',
        // accessor: 'col2',
      // },
    // ],
    // []
  // )
  const columns = useMemo(
    (h = props.cols) => h, []
  )  

	const GlobalFilter = ({
	  preGlobalFilteredRows,
	  globalFilter,
	  setGlobalFilter
	}) => {
	  const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

	  return (
	  <div>
		<div>
		  <button id="filtAll" onClick={e => {setGlobalFilter("");}}>
			Kaikki kiekot
		  </button>
		  <button id="filtTrade" onClick={e => {setGlobalFilter("Vaihtari");}}>
			Vaihtarit
		  </button>
		  <button id="filtBag" onClick={e => {setGlobalFilter("Bägi");}}>
			Bägikiekot
		  </button>
		  <button id="filtOther" onClick={e => {setGlobalFilter("Muu");}}>
			Ryhmä muut
		  </button>
		</div>
		</div>
	  );
	};

  // const {
    // getTableProps,
    // getTableBodyProps,
    // headerGroups,
    // rows,
    // prepareRow,
  // } = useTable( { columns, data }, useSortBy )
  
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
		columns,
		data,
		initialState: { 
			pageIndex: 0,
			hiddenColumns: ["col0", "col10"],
			globalFilter: DISPLAY_MODE
		} // Array<ColumnId: String>
    },
    useGlobalFilter,
	useSortBy
  );
  

  return (
	<div  className="disc-table__content">
    <table className="react-table" {...getTableProps()}>
	  <caption className="react-table__caption">
		<div>Kaikki kiekot {props.capt} kpl</div>
		<span>Suodata status: </span> 
		<GlobalFilter
		preGlobalFilteredRows={preGlobalFilteredRows}
		globalFilter={state.globalFilter}
		setGlobalFilter={setGlobalFilter}
		/>		
	  </caption>
      <thead className="react-table__thead" >
        {headerGroups.map(headerGroup => (
          <tr className="react-table__tr" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="react-table__th"
                {...column.getHeaderProps( column.getSortByToggleProps() )}
              >
                {column.render('Header')}
			
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="react-table__body" {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr className="react-table__body__tr" {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td className="react-table__body__td"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>

	</div>
  )
}
