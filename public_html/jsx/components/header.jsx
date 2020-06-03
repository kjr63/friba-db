import React from 'react';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <header className="header">
                <div className="header__text-1">Friba Db</div>
            </header>            
        );
    }
}
