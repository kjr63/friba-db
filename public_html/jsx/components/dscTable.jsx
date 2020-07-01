import React from 'react';
import { DISPLAY_MODE } from "../utils/variables.jsx";
import RTable from "./reactTable.jsx";
import { database } from "../../firebase/firebase.jsx";

export default class DscTable extends React.Component {
    constructor (props) {
        super(props);
		this.databaseData = [];
		this.headers = [
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
		];
		this.state = {
			tData: [],
			tText: '',
			tButton: '',
			tDisplay: 'none',
		}
		this.toggleTable = this.toggleTable.bind(this);
		this.crossTable = this.crossTable.bind(this);
        this.formattedArray = this.formattedArray.bind (this);
		this.setTableDisplay = this.setTableDisplay.bind (this);
    }

	crossTable (from) {
		let toRow = { 
			col1: from.manuf.trim(),
			col2: from.type.trim(),
			col3: from.mold.trim(),
			col4: from.plastic.trim(),
			col5: from.weight.trim(),
			col6: from.color.trim(),
			col7: from.mint.trim(),
			col8: from.info.trim(),
			col9: from.image.trim()
		};
		return toRow;
	}
    formattedArray (format, discArray) {
        let displayArray = [];
        //Formatoi taulu
        switch (format) {
            case 'ONLY_TRADE_DISCS': {
				let i = 0;
				for (i=0; i<discArray.length; i++) {
					if (discArray[i].status.trim() === "Vaihtari") {
						displayArray.push(this.crossTable(discArray[i]));
					}
				}
                break;
            }
            default: {
                displayArray = discArray.map ( item => this.crossTable(item) );
                break;
            }
        }
        //Palauta formatoitu taulu
        return displayArray;
    }
	setTableDisplay (mode, dData) {
		if ( mode === 'ALL' ) {
			this.setState (
				{ 
					tText: 'Kaikki kiekot',
					tButton: 'Vaihtarit',
					tData: this.formattedArray ('ALL', dData)
				}
			);
		}
		else {
			this.setState (
				{ 
					tText: 'Vaihtarit',
					tButton: 'Kaikki kiekot',
					tData: this.formattedArray ('ONLY_TRADE_DISCS', dData)
				}
			);
		}			
	}
	toggleTable () {
		this.setState (
			function (prevState) {
				let orig = prevState.tText;
				return (
					{
						tText: (orig === 'Vaihtarit') ? 'Kaikki kiekot' : 'Vaihtarit',
						tButton: (orig === 'Vaihtarit') ? 'Vaihtarit' : 'Kaikki kiekot',
						tData:
							(orig === 'Vaihtarit') ? 
							this.formattedArray('ALL', this.databaseData) :
							this.formattedArray('ONLY_TRADE_DISCS', this.databaseData),
					}
				);
			}
		);
	}
	componentDidMount () {
		// Lue tietokanta
		database.ref().once("value")
			.then(
				(snapshot) => {
					snapshot.forEach ( 
						(childSnapshot) => {
							// key will be "ada" the first time and "alan" the second time
							let key = childSnapshot.key;
							// childData will be the actual contents of the child
							let childData = childSnapshot.val();
							this.databaseData.push(childData);
							//console.log("cd= "+childData.manuf);
						}
					);
					//console.log("this.databaseData= "+this.databaseData);
					//Päivitä taulukko
					this.setTableDisplay (DISPLAY_MODE, this.databaseData);
					this.setState({tDisplay:'block'});
				},
				(error) => {
					console.log("database read error: ", error);
				}
		);
	}	
    render () {
        return (
            <section className="disc-table content__center" style={{display:this.state.tDisplay}}>
				<div className="disc-table__header">
					<div className="disc-table__header__text">{this.state.tText}</div>
					<div className="disc-table__header__button btn-basic" onClick={this.toggleTable}>{this.state.tButton}</div>
				</div>
                <RTable cols={this.headers} data={this.state.tData} capt={this.state.tData.length}/>
            </section>          
        );
    }
}
