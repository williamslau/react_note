import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from 'react-router-dom'
class userList extends Component {
    constructor() {
        super();
        this.state = {
            list: [{ id: 1, name: 1 }, { id: 2, name: 2 }]
        }
    }
    render() {
        return (<div>
            <ul>
                {this.state.list.map(list=>(
                    <li key={list.id}><Link to={`/user/article/${list.id}`}>{list.name}</Link></li>
                ))}
            </ul>
        </div>)
    }
}
export default userList;