import React from 'react';
import { DISPLAY_MODE } from "../utils/variables.jsx";
import RTable from "./reactTable.jsx";
import { database } from "../../firebase/firebase.jsx";

export default class DscTable extends React.Component {
    constructor (props) {
        super(props);
		this.headers = [
			{
				Header: 'Id',
				accessor: 'col0',
			},		
			{
				Header: 'Valmistaja',
				accessor: 'col1',
			},
			{
				Header: 'Nopeus',
				accessor: 'col2',
			},
			{
				Header: 'Malli',
				accessor: 'col3',
			},
			{
				Header: 'Muovi',
				accessor: 'col4',
			},
			{
				Header: 'Paino',
				accessor: 'col5',
			},
			{
				Header: 'Väri',
				accessor: 'col6',
			},
			{
				Header: 'Kunto',
				accessor: 'col7',
			},
			{
				Header: 'Info',
				accessor: 'col8',
			},
			{
				Header: 'Kuva',
				accessor: 'col9',			
				Cell: function (cell) {
					const valueArray = cell.value.split(';');
					return (
						<div>
							<div><a target='_blank' href={'../img/'+valueArray[0]}> {valueArray[0]}</a></div>
							<div><a target='_blank' href={'../img/'+valueArray[1]}> {valueArray[1]} </a></div>
						</div>
					);
				}			
			},
			{
				Header: 'Status',
				accessor: 'col10',
			},			
		];
		this.state = {
			tData: [],
			tDisplay: 'none',
		}
		this.crossTable = this.crossTable.bind(this);
    }

	crossTable (from) {
		let toRow = {
			col0: from.id.trim(),
			col1: from.manuf.trim(),
			col2: from.type.trim(),
			col3: from.mold.trim(),
			col4: from.plastic.trim(),
			col5: from.weight.trim(),
			col6: from.color.trim(),
			col7: from.mint.trim(),
			col8: from.info.trim(),
			col9: from.image.trim(),
			col10: from.status.trim(),
		};
		return toRow;
	}
	componentDidMount () {
		// Lue tietokanta
		database.ref().once("value")
			.then(
				(snapshot) => {
					let databaseData = [];
					snapshot.forEach ( 
						(childSnapshot) => {
							let key = childSnapshot.key;
							// childData will be the actual contents of the child
							let childData = childSnapshot.val();
							// Kirjoita data muuttujaan
							databaseData.push(childData);
						}
					);
					//console.log("this.databaseData= "+this.databaseData);
					// Suodata data (DISPLAY_MODE) ja päivitä react-table data
					//this.setTableDisplay (DISPLAY_MODE, this.databaseData);
					let displayArray = [];
					let i = 0;
					for (i=0; i<databaseData.length; i++) {
						displayArray.push(this.crossTable(databaseData[i]));
					}
					this.setState ({tData: displayArray});
					this.setState ({tDisplay:'block'});
				},
				(error) => {
					console.log("database read error: ", error);
				}
		);
	}	
    render () {
        return (
            <section className="disc-table content__center" style={{display:this.state.tDisplay}}>
				<div className="disc-table__header">Kiekkolista</div>
                <RTable cols={this.headers} data={this.state.tData} />
            </section>          
        );
    }
}
