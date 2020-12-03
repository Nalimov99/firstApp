import {React, Component} from "react";

import "./app.css"
import AppHeader from "../app-header/app-header"
import SearchPanel from "../search-panel/search-panel"
import PostStatusFilter from "../post-status-filter/post-status-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"

export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data : [
            {label: 'Learning React', important: true, id: 1},
            {label: 'That is so GOOD!', id: 2},
            {label: 'I need a break...', id: 3}
            ],
            searchText: '',
            filter: 'all'
        }
        this.lastId = 4;
        

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    addItem(text) {
        const newItem = {
            label: text,
            id: this.lastId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldTarget = data[index];
            const newTarget = {...oldTarget, like: !oldTarget.like}

            const newArr = [...data.slice(0, index),newTarget, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldTarget = data[index];
            const newTarget = {...oldTarget, important: !oldTarget.important}

            const newArr = [...data.slice(0, index),newTarget, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    filterPosts(items, filter) {
        if(filter === "like") {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }
    onFilterChange(filter) {
        this.setState({filter});
    }

    searchPosts(items, searchText) {
        if(searchText.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(searchText) > -1
        });
    }

    onUpdateSearch(searchText) {
        this.setState({searchText})
    }


    render() {
        const {data, searchText, filter} = this.state;
        const liked = data.filter(elem => elem.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPosts(data, searchText), filter);

        return (
            <div className="app">
                <AppHeader
                liked = {liked}
                allPosts = {allPosts}/>
                <div className="d-flex search-pannel">
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={this.state.filter}
                    onFilterChange={this.onFilterChange}/>
                </div>
                <PostList posts={visiblePosts} 
                onDelete = {this.deleteItem}
                onToggleLike = {this.onToggleLike}
                onToggleImportant = {this.onToggleImportant}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
    

}
