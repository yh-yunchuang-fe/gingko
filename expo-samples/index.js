import React, { Component } from 'react'
import {
    ScrollView,
    Text
} from "react-native";
import { Font } from 'expo';
import ButtonDemo from './demos/button'
import IconDemo from './demos/icon'
import gingkoIcon from '../src/assets/index'

export default class Samples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontIsLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'gingkoIcon': require('../src/assets/fonts/gingkoIcon.ttf')
        });
        this.setState({
            fontIsLoaded: true
        })
    }

    render() {
        if (!this.state.fontIsLoaded) {
            return null
        }
        return (
            <ScrollView>
                <ButtonDemo/>
                <IconDemo/>
            </ScrollView>
        );
    }
}
