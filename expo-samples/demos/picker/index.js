/**
 * Created by beilunyang on 2018/2/11
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
} from 'react-native';
import { Picker as YHPicker } from '../../../components/index';

export default class PickerDemo extends Component {
    state = {
        value: '',
    };

    handleOk = (selectedValue) => {
        this.setState({
            value: selectedValue,
        });
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>{this.state.value}</Text>
                <YHPicker
                    data={['java', 'js', 'c++', 'c#', 'python', 'lisp', 'php', 'go']}
                    onOk={this.handleOk}
                />
                <YHPicker>
                    <Picker.Item value="gba" label="gba" />
                    <Picker.Item value="ps4" label="ps4" />
                    <Picker.Item value="ns" label="ns" />
                    <Picker.Item value="xbox" label="xbox" />
                </YHPicker>
            </View>
        );
    }
}