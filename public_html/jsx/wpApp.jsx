import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import '../firebase/firebase.jsx';

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
    }
	componentDidMount () {
		//let fs = require('fs');
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
