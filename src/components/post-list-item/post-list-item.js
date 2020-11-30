import React from "react";

import "./post-list-item.css"

class PostListItem extends React.Component {

    
    render() {
        const {label, onDelete, onToggleLike, onToggleImportant, like, important} = this.props;

        let classNames = "app-list-item d-flex justify-content-between"
        if(important) {
            classNames += ' important'
        }

        if(like) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fa fa-star" onClick={onToggleImportant}></i>
                    </button>
                    <button 
                    className="btn-trash btn-sm"
                    onClick = {onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        ) 
    }
}





export default PostListItem;