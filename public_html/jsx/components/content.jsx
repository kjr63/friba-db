import React from 'react';
import DscTable from "./dscTable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <main className="content">
				<div className="content__left"></div>
                <DscTable />
				<div className="content__right"></div>
            </main>          
        );
    }
}
