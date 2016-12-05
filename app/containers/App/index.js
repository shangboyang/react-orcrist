import React, {Component} from 'react';

export default class Main extends Component {

    constructor(props) {
        super(props);
        console.log('App', this);
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};
