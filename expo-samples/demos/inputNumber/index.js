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
            value2: 100,
            value3: 1
        }
    }

    render() {
        const { value1, value2, value3 } = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <InputNumber
                        width={175}
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
                    <WhiteSpace/>
                    <InputNumber
                        value={value3}
                        editable={false}
                        min={0}
                        max={20}
                        unit="kg"
                        onChange={(value)=>{
                            this.setState({value3: value})
                        }}
                    />
                </WingBlank>
            </View>
        )
    }
}
