import React from 'react';
import Header from './header.jsx';
import Content from './content.jsx';

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
        //console.log("app constructor "+square(4));
    }
    render () {     
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}
