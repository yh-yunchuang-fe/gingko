/**
 * @author zhangyi
 * @date 2018/4/20
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'
import {
    WhiteSpace,
    WingBlank,
    OptionTag
} from "../../../components";

export default class OptionTagDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsIndex: 0
        }
    }

    render() {
        const { optionsIndex } = this.state;
        const options = ['水果二配', '蔬菜二配', '安徽'];

        const optionsNode = options.map((item, index)=>{
            return (
                <OptionTag
                    key={index}
                    selected={index === optionsIndex}
                    onChange={(selected)=>{
                        if (selected) {
                            this.setState({
                                optionsIndex: index
                            })
                        }
                    }}
                >{item}</OptionTag>
            )
        });

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        {optionsNode}
                    </View>
                    <WhiteSpace/>
                    <OptionTag disabled>不可点击</OptionTag>
                    <WhiteSpace/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <OptionTag multiple>多选1</OptionTag>
                        <OptionTag multiple>多选2</OptionTag>
                        <OptionTag multiple>多选3</OptionTag>
                    </View>
                </WingBlank>
            </View>
        )
    }
}