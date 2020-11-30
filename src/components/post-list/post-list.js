import React from "react";

import "./post-list.css"
import PostListItem from "../post-list-item/post-list-item"

const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) => {
    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem  
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleLike = {() => onToggleLike(id)}
                onToggleImportant = {() => onToggleImportant(id)}/>
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;