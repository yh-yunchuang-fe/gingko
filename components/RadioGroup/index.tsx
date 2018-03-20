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
        this.state = {
            activeIndex: props.defaultIndex || 0
        };
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
                <View style={cutLineSty}>
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