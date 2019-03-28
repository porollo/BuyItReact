import React, {Component} from 'react';

import './search-panel.css';


export default class SearchPanel extends Component {

    state = {
        searchFilter: ''
    };


    onSearchChange = (e) => {
        const searchFilter = e.target.value;
        this.setState({searchFilter});
        this.props.onSearchChange(searchFilter);
    };



    render () {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Type to search..."
                   value={this.state.searchFilter}
                   onChange={this.onSearchChange}/>
        );
    }
}
