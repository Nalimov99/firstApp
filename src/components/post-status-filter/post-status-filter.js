import React from "react";

import "./post-status-filter.css"

export default class PostStatusFilter extends React.Component {

    constructor(props) {
        super(props)
        this.buttons = [
            {label: 'Все', name: 'all'},
            {label: 'Понравилось', name:'like'}
        ]
    }
    
    render() {

        const buttons = this.buttons.map(({label, name}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn btn-info' : 'btn btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={clazz}
                    onClick={() => this.props.onFilterChange(name)}
                >{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

