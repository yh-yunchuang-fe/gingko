/**
 * Created by beilunyang on 2018/2/11
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
} from 'react-native';
import {
    Button,
    WhiteSpace,
    Picker as YHPicker,
} from '../../../components/index';

export default class PickerDemo extends Component {
    state = {
        value: '',
        visible: false,
        visible2: false,
    };

    handleDismiss = () => {
        this.setState({
            visible: false,
            visible2: false,
        });
    }

    handleOk = (selectedValue) => {
        this.setState({
            value: selectedValue,
        });
        this.handleDismiss();
    };

    handlePicker = () => {
        this.setState({
            visible: true,
        });
    }

    handlePicker2 = () => {
        this.setState({
            visible2: true,
        });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>{this.state.value}</Text>
                <Button onClick={this.handlePicker}>触发Picker 1</Button>
                <WhiteSpace/>
                <Button onClick={this.handlePicker2}>触发Picker 2</Button>
                <YHPicker
                    visible={this.state.visible}
                    data={['java', 'js', 'c++', 'c#', 'python', 'lisp', 'php', 'go']}
                    onOk={this.handleOk}
                    onDismiss={this.handleDismiss}
                />
                <YHPicker
                    visible={this.state.visible2}
                    onOk={this.handleOk}
                    onDismiss={this.handleDismiss}
                >
                    <Picker.Item value="gba" label="gba" />
                    <Picker.Item value="ps4" label="ps4" />
                    <Picker.Item value="ns" label="ns" />
                    <Picker.Item value="xbox" label="xbox" />
                </YHPicker>
            </View>
        );
    }
}