import React from "react";
import "./search-panel.css"

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    
    onUpdateSearch(e) {
        const searchText = e.target.value;
        this.setState({searchText})
        this.props.onUpdateSearch(searchText);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                value = {this.state.searchText}
                onChange={this.onUpdateSearch}
                
            />
        )
    }

};
