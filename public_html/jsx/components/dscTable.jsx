import React from 'react';
import { DISPLAY_MODE } from "../utils/variables.jsx";
import { discData } from "../utils/variables.jsx";
import DiscTable from "./discTable.jsx";
import RTable from "./reactTable.jsx";

export default class DscTable extends React.Component {
    constructor (props) {
        super(props);
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
			},			
		];
		this.state = {
			tData: [],
			tText: '',
			tButton: '',
		}
		this.toggleTable = this.toggleTable.bind(this);
		this.crossTable = this.crossTable.bind(this);
        this.formattedArray = this.formattedArray.bind (this);
    }
	componentDidMount () {
		if ( DISPLAY_MODE === 'ALL' ) {
			this.setState (
				{ 
					tText:'Kaikki kiekot',
					tButton: 'Vaihtarit',
					tData: this.formattedArray ('ALL', discData)
				}
			);
		}
		else {
			this.setState (
				{ 
					tText:'Vaihtarit',
					tButton: 'Kaikki kiekot',
					tData: this.formattedArray ('ONLY_TRADE_DISCS', discData)
				}
			);
		}
	}
	crossTable (from) {
		let toRow = { 
			col1: from.manuf,
			col2: from.type,
			col3: from.mold,
			col4: from.plastic,
			col5: from.weight,
			col6: from.color,
			col7: from.mint,
			col8: from.info,
			col9: from.image
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
					if (discArray[i].status === "Vaihtari") {
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
							this.formattedArray('ALL', discData) :
							this.formattedArray('ONLY_TRADE_DISCS', discData),
					}
				);
			}
		);
	}	
    render () {
        return (
            <section>
				<div>
					<p>{this.state.tText}</p>
					<p onClick={this.toggleTable}>{this.state.tButton}</p>
				</div>
                <RTable cols={this.headers} data={this.state.tData} key={this.state.counter} />
            </section>          
        );
    }
}