import React from 'react';
import { DISPLAY_MODE } from "../utils/variables.jsx";
import DiscTable from "./discTable.jsx";
import RTable from "./reactTable.jsx";

export default class DscTable extends React.Component {
    constructor (props) {
        super(props);
		this.initHeaders = [
			{
				Header: 'Col 1',
				accessor: 'col1',
			},
			{
				Header: 'Col 2',
				accessor: 'col2',
			},		
		];
		this.clickData = [
			{
			col1: 'click Tsaukkis',
			col2: 'click World',
			},
			{
			col1: 'click react-table',
			col2: 'click jyrää',
			},
			{
			col1: 'click aina',
			col2: 'click kun tahdot',
			},
			{
			col1: 'click lisä',
			col2: 'click rivi',
			},				
		];
		this.initData = [
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
		];
		this.state = {
			tData: this.initData,
			tHeaders: this.initHeaders,
			tHeader: '',
			tButton: '',
			counter: 0,
		}
		this.toggleTable = this.toggleTable.bind(this);
		//console.log(this.state.tData);
    }
	componentDidMount () {
		//if ( DISPLAY_MODE === 'ALL' ) this.setState ({ tHeader:'Kaikki kiekot', tButton: 'Vaihtarit' });
		//else this.setState ({ tHeader:'Kiekkovaihtarit', tButton: 'Kaikki kiekot' });
		//this.setState ({tData:this.initData, tHeaders:this.initHeaders});
		this.setState (
			function (prevState) {
				return (
					{
						tHeader: 'Kaikki kiekot',
						tButton: 'Kaikki kiekot',
						tData: this.initData,
						tHeaders: this.initHeaders
					}
				);
			}
		);
	}
	toggleTable () {
		this.setState (
			function (prevState) {
				return (
					{
						tHeader: (prevState.tHeader === 'Kiekkovaihtarit') ? 'Kaikki kiekot' : 'Kiekkovaihtarit',
						tButton: (prevState.tButton === 'Vaihtarit') ? 'Kaikki kiekot' : 'Vaihtarit',
						tData: this.clickData,
						tHeaders: this.clickHeaders,
						counter: prevState.counter + 1
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
                <RTable cols={this.state.tHeaders} data={this.state.tData} />
            </section>          
        );
    }
}
