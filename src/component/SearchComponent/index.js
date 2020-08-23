import React, { Component } from 'react';
import '../../css/header/search-component.scss';

class SearchComponent extends Component {
    render() {
        return (
            <div id="search-component">
                <input type="text" placeholder="Search entire store here" />
                <span className="material-icons">search</span>
            </div>
        )
    }
}

export default SearchComponent;