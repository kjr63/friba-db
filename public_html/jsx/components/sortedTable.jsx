import React from 'react';

function TableItem (props) {
    const images = props.disc.image.split(';');
    const imgLoc0 = window.location.href.replace("index.html", "img/"+images[0] );
    const imgLoc1 = window.location.href.replace("index.html", "img/"+images[1] );
    return (
        <tbody className="dtable__body">
            <tr className="dtable__body__row">
                <td className="dtable__body__row__cell">{props.disc.manuf}</td>
                <td className="dtable__body__row__cell">{props.disc.type}</td>
                <td className="dtable__body__row__cell">{props.disc.mold}</td>
                <td className="dtable__body__row__cell">{props.disc.plastic}</td>
                <td className="dtable__body__row__cell">{props.disc.weight}</td>
                <td className="dtable__body__row__cell">{props.disc.color}</td>
                <td className="dtable__body__row__cell">{props.disc.mint}</td>
                <td className="dtable__body__row__cell">{props.disc.info}</td>
                <td className="dtable__body__row__cell">
                    <div><a href={imgLoc0}>{images[0]}</a></div>
                    <div><a href={imgLoc1}>{images[1]}</a></div>
                </td>
            </tr>
        </tbody>
    )
}

export default class SortedTable extends React.Component {
    constructor (props) {
        super (props);
        this.FORMAT_OPTION = DISPLAY_MODE;
        this.sortToggle = [true, true, true, true, true, true, true, true, true, true];
        this.state = {
            list: [],
            listCnt: 0
        };
        this.sortTable = this.sortTable.bind(this);
    }
    componentDidMount () {
    }
    sortTable (col) {
        let obj = this.state.list;
        let toggle = this.sortToggle;
        if (col === 0) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.manuf < b.manuf ) {retval = -1;}
                if ( a.manuf > b.manuf ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];
        } else if (col===1) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.type < b.type ) {retval = -1;}
                if ( a.type > b.type ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];
        } else if (col===2) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.mold < b.mold ) {retval = -1;}
                if ( a.mold > b.mold ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===3) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.plastic < b.plastic ) {retval = -1;}
                if ( a.plastic > b.plastic ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===4) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.weight < b.weight ) {retval = -1;}
                if ( a.weight > b.weight ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===5) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.color < b.color ) {retval = -1;}
                if ( a.color > b.color ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===6) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.mint < b.mint ) {retval = -1;}
                if ( a.mint > b.mint ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===7) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.info < b.info ) {retval = -1;}
                if ( a.info > b.info ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===8) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.image < b.image ) {retval = -1;}
                if ( a.image > b.image ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        } else if (col===9) {
            let retval = 0;            
            obj.sort(function(a,b){
                if ( a.status < b.status ) {retval = -1;}
                if ( a.status > b.status ) {retval = 1;}
                if ( !toggle[col] ) {
                    if (retval === -1) retval = 1;
                    else if (retval === 1) retval = -1;
                }
                return retval;
            });
            toggle[col] = !toggle[col];            
        }        
        this.setState ({list:obj});
        this.sortToggle = toggle;
    }
    render () {
		//let data = this.formattedArray ( this.props.discMode, discData );
        //this.setState ( { list: data, listCnt: data.length } );
        return (
            <section className="dtable">
                <table className="dtable__root">
                    <caption className="dtable__root__caption tooltip">
                        Kiekkolista ( {this.state.listCnt} kpl )
                        <span className="tooltiptext"><p>Järjestä klikkaamalla sarakeotsikkoa.</p></span>
                    </caption>
                    <thead className="dtable__header">
                        <tr className="dtable__header__row">
                            <th className="dtable__header__cell" onClick={() => this.sortTable(0)}>
                                Valmistaja
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(1)}>
                                Nopeus
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(2)}>
                                Malli
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(3)}>
                                Muovi
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(4)}>
                                Paino
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(5)}>
                                Väri
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(6)}>
                                Kunto
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(7)}>
                                Info
                            </th>
                            <th className="dtable__header__cell" onClick={() => this.sortTable(8)}>
                                Kuva
                            </th>                    
                        </tr>
                    </thead>
                    { this.state.list.map ((item) => <TableItem key={item.id} disc={item} />) }
               </table>
            </section>            
        )
    }
}

