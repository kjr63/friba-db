import React from 'react';
import { DISPLAY_MODE } from "../utils/variables.jsx";
import DiscTable from "./discTable.jsx";
import RTable from "./reactTable.jsx";

export default class DscTable extends React.Component {
    constructor (props) {
        super(props);
		this.rTableHeaders = [
			{
				Header: 'Col 1',
				accessor: 'col1',
			},
			{
				Header: 'Col 2',
				accessor: 'col2',
			},		
		];		
		this.state = {
			tData: [
				{
				col1: 'Tsaukkis',
				col2: 'World',
				},
				{
				col1: 'react-table',
				col2: 'jyrää',
				},
				{
				col1: 'aina',
				col2: 'kun tahdot',
				},
			],
			tHeader: '',
			tButton: ''
		}
		this.toggleTable = this.toggleTable.bind(this);
    }
	componentDidMount () {
		if ( DISPLAY_MODE === 'ALL' ) this.setState ({ tHeader:'Kaikki kiekot', tButton: 'Vaihtarit' });
		else this.setState ({ tHeader:'Kiekkovaihtarit', tButton: 'Kaikki kiekot' });
	}
	toggleTable () {
		this.setState (
			function (prevState) {
				return (
					{
						tHeader: (prevState.tHeader === 'Kiekkovaihtarit') ? 'Kaikki kiekot' : 'Kiekkovaihtarit',
						tButton: (prevState.tButton === 'Vaihtarit') ? 'Kaikki kiekot' : 'Vaihtarit',
					}
				);
			}
		);
	}	
    render () {
        return (
            <section>
				<div>
					<p>{this.state.tHeader}</p>
					<p onClick={this.toggleTable}>{this.state.tButton}</p>
				</div>
                <RTable tableHeaders={this.rTableHeaders} tableData={this.state.tData} />
            </section>          
        );
    }
}
