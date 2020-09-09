import React from 'react';
import DscTable from "./dscTable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
			<main className="main">
				<div className="friba-animation">
					<div className="friba-animation-left"></div>
					<div className="friba-animation-center">
						<div className="friba-animation-center__flying-object">
						</div>					
					</div>
					<div className="friba-animation-right"></div>
				</div>
				<div className="content">
					<div className="content__left"></div>
					<DscTable />
					<div className="content__right"></div>
				</div>
            </main>          
        );
    }
}
