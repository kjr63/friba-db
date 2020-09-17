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
		<div className="global-filter">
			<div className="global-filter__buttons">
				  <div className="filter-button" onClick={e => {setGlobalFilter("");}}>
					Kaikki kiekot
				  </div>
				  <div className="filter-button" onClick={e => {setGlobalFilter("Vaihtari");}}>
					Vaihtarit
				  </div>
				  <div className="filter-button" onClick={e => {setGlobalFilter("Bägi");}}>
					Bägikiekot
				  </div>
				  <div className="filter-button" onClick={e => {setGlobalFilter("Muu");}}>
					Ryhmä muut
				  </div>
			</div>
			<div className="global-filter__caption">{globalFilter}</div>
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
			hiddenColumns: ["col10"],
			globalFilter: DISPLAY_MODE
		}
    },
    useGlobalFilter,
	useSortBy
  );
  

  return (
	<div  className="disc-table__content">
		<table className="react-table" {...getTableProps()}>
		  <caption className="react-table__caption">
			<div className="react-table__caption-1">Suodata tiedot</div>
			<div className="react-table__caption-2">
				<GlobalFilter
					preGlobalFilteredRows = {preGlobalFilteredRows}
					globalFilter = {state.globalFilter}
					setGlobalFilter = {setGlobalFilter}
				/>
			</div>
		  </caption>
		  <thead className="react-table__thead" >
			{headerGroups.map(headerGroup => (
			  <tr className="react-table__tr" {...headerGroup.getHeaderGroupProps()}>
				{headerGroup.headers.map(column => (
				  <th className="react-table__th"
					{...column.getHeaderProps( column.getSortByToggleProps() )}
				  >
					{column.render('Header')}<pre> </pre>
					<span className="react-table__th__sort-icon">
						{column.isSorted
						  ? column.isSortedDesc
							? ' ▼'
							: ' ▲'
						  : '▲▼'}
					</span>
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
