import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import propTypes from 'prop-types'

class Person extends Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        age: propTypes.number,
        gender: propTypes.oneOf(['man', 'woman']),
        hobby: propTypes.array,
        salary: function (props, key, com) {
            if (props[key] < 10000) {
                throw new Error(`${com}error${props[key]} is too low`);
            }
        },
        position: propTypes.shape({
            x: propTypes.number,
            y: propTypes.number
        })
    }
    constructor(props) {
        super();
    }
    render() {
        let { name, age, gender, hobby, salary, position } = this.props;
        return (
            <React.Fragment>
                {name}<br/>
                {age}<br/>
                {gender}<br/>
                {hobby}<br/>
                {salary}<br/>
                {JSON.stringify(position)}<br/>
            </React.Fragment>
        )
    }
}let person={
    name:'william',
    age:18,
    gender:'man',
    hobby:['sleeping'],
    salary:10000,
    position:{
        x:1000,
        y:1000
    }
}
render(<Person {...person}></Person>,window.root);