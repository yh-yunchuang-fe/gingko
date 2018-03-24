/**
 * @author ${USER}
 * @date ${DATE}
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'
import {
    WhiteSpace,
    WingBlank,
    InputNumber
} from "../../../components";

export default class InputNumberDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: 0,
            value2: 100
        }
    }

    render() {
        const { value1, value2 } = this.state;

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <InputNumber
                        value={value1}
                        unit="份"
                        onChange={(value)=>{
                            this.setState({value1: value})
                        }}
                    />
                    <WhiteSpace/>
                    <InputNumber
                        value={10}
                        unit="份"
                        disabled={true}
                    />
                    <WhiteSpace/>
                    <InputNumber
                        width={175}
                        value={value2}
                        min={100}
                        max={105}
                        step={5}
                        unit="kg"
                        onChange={(value)=>{
                            this.setState({value2: value})
                        }}
                    />
                </WingBlank>
            </View>
        )
    }
}
