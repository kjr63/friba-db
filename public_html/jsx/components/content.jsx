import React from 'react';
//import DiscTable from "./discTable.jsx";
//import RTable from "./reactTable.jsx";
import DscTable from "./dscTable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <main>
                <DscTable />
            </main>          
        );
    }
}
