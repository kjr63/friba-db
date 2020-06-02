import React from 'react';
import DiscTable from "./discTable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <main>
                <DiscTable />
            </main>          
        );
    }
}
