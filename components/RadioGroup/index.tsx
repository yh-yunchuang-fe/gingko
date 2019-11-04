/**
 * @author zhangyi
 * @date 2018/3/20
 */
/**
 * TODO 后续需添加对mode = 'radio'的支持
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";


import styles from './style/index'
import RadioGroupProps from './propsType'

export default class RadioGroup extends React.Component<RadioGroupProps, any> {

    static defaultProps = {
        mode: 'button',
        defaultIndex: 0,
    };

    constructor(props) {
        super(props);
        let index = props.index ? props.index : (props.defaultIndex || 0);
        this.state = {
            activeIndex: index
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.index != nextProps.index) {
            this.setState({
                index: nextProps.index
            })
        }
    }

    onChange = (index, item) => {
        const { onChange } = this.props;
        this.setState({ activeIndex: index });
        if (onChange) {
            onChange(index, item);
        }
    };

    render() {
        const {
            mode, radios, style,
            ...restProps
        } = this.props;

        if (mode !== 'button') {
            console.warn('暂支持button模式');
            return null
        }

        const { activeIndex } = this.state;

        let dom = radios.map((item, index) => {
            let itemSty: any = null;
            let activeSty: any = null;
            let activeText: any = null;
            let cutLineSty: any = styles.cutLineSty;

            if (index === 0) {
                itemSty = styles.firstRadioBtn;
            } else if (index === radios.length - 1) {
                itemSty = styles.lastRadioBtn;
                cutLineSty = null;
            }

            if (activeIndex === index) {
                activeSty = styles.activeRadioBtn;
                activeText = styles.activeRadioBtnText
            }

            return (
                <View style={cutLineSty} key={index}>
                    <TouchableOpacity onPress={this.onChange.bind(this, index, item)}>
                        <View style={[styles.radioBtn, itemSty, activeSty]}>
                            <Text style={[styles.radioBtnText, activeText]}>
                                { item }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            )
        });

        return (
            <View style={[styles.radioGroup, style]}>
                { dom }
            </View>
        )
    }
}