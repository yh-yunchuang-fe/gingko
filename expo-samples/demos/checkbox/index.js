import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Icon,
    Checkbox,
    WhiteSpace,
} from '../../../components';

const CheckIcon = ({ checked }) => {
    const name = checked ? 'radio-on' : 'radio-off';
    return (
        <Icon name={name} color="red" />
    );
};

export default class extends Component {
    state = {
        checkedStyle: {},
        baiduStyle: {},
        singleValue: '',
        value: 1,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Checkbox
                    defaultChecked={false}
                    onChange={(checked) => console.log('checkedState:', checked)}
                >
                    default icon Checkbox
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    icon={CheckIcon}
                >
                    custom icon Checkbox
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    defaultChecked={true}
                    disabled={true}
                    textStyle={{ color: 'red' }}
                >
                    disabled checkbox and customize the text styles
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    style={{
                        backgroundColor: '#fff',
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        ...this.state.checkedStyle,
                    }}
                    onChange={(checked) => {
                        checked ? this.setState({
                            checkedStyle: {
                                backgroundColor: '#e7f7ff',
                            },
                        }) : this.setState({
                            checkedStyle: {},
                        })
                    }}
                >
                    <View>
                        <Text style={{ marginBottom: 10 }}>李荣斌</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text>待提单: 10</Text>
                            <Text>配送中: 20</Text>
                            <Text>详情</Text>
                        </View>
                    </View>
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    icon={false}
                    onChange={(checked) => {
                        if (checked) {
                            this.setState({
                                baiduStyle: {
                                    color: '#24a8e8',
                                },
                            });
                        } else {
                            this.setState({
                                baiduStyle: {

                                },
                            });
                        }
                    }}
                >
                    <Text style={{
                        backgroundColor: '#fff',
                        paddingVertical: 15,
                        ...this.state.baiduStyle,
                    }}>no icon, just a checkable component</Text>
                </Checkbox>
                <WhiteSpace />
                <Checkbox
                    defaultChecked={true}
                    dir="right"
                    icon={({ checked }) => {
                        return checked ? <Icon name="checkmark" /> : null;
                    }}
                    style={{
                        backgroundColor: '#fff',
                        padding: 10,
                    }}
                >
                    <View>
                        <Text>custom icon and change the default icon's direction</Text>
                    </View>
                </Checkbox>
                <WhiteSpace />
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Checkbox
                        checked={this.state.value === 1}
                        onChange={() => {
                            this.setState({
                                value: 1,
                            });
                        }}
                    >
                        选项一
                    </Checkbox>
                    <Checkbox
                        checked={this.state.value === 2}
                        onChange={() => {
                            this.setState({
                                value: 2,
                            });
                        }}
                    >
                        选项二
                    </Checkbox>
                    <Checkbox
                        checked={this.state.value === 3}
                        onChange={() => {
                            this.setState({
                                value: 3,
                            });
                        }}
                    >
                        选项三
                    </Checkbox>
                </View>
            </View>
        );
    }
}