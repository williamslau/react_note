import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class LifeCyele extends Component {
    static defaultProps = {
        name: 'william'
    }
    constructor(props) {
        super();
        console.log('father:constructor');
        this.state = {
            name: props.name,
            count: 0
        }
    }
    componentWillMount() {
        console.log('father:componentWillMount');
    }
    componentDidMount() {
        console.log('father:componentDidMount');
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        console.log('father:render');
        return (
            <div>
                计算器：{this.state.count}
                <button onClick={this.handleClick}>+</button>
                <Child count={this.state.count}></Child>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextStare) {    // 如果没有写这个生命周期，默认return true
        if (nextStare.count === this.state.count) {
            return false;
        }
        return true
    }
}
class Child extends Component {
    componentWillMount() {
        console.log('child:componentWillMount');
    }
    render() {
        console.log('child:render');
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
    componentDidMount() {
        console.log('child:componentDidMount');
    }
    componentWillReceiveProps(newProps) {
        console.log('child:componentWillReceiveProps');
    }
}
render(<LifeCyele></LifeCyele>, window.root);