import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import Samples from './expo-samples/index'

export default class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <Samples/>
        );
    }
}

AppRegistry.registerComponent('main', () => App);
