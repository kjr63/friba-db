import React from 'react';
import DscTable from "./dscTable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
			<main className="main">
				<div className="main__animation">
					<div className="main__animation-left"></div>
					<div className="main__animation-center"></div>
					<div className="main__animation-right"></div>
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
