/**
 * @author zhangyi
 * @date 2018/3/9
 */
import React from 'react';
import {
    View,
    Text, TouchableWithoutFeedback,
} from 'react-native'
import styles from './style/index'
import TagProps from './propsType'
import variables from '../../src/style/variables';

export default class Tag extends React.Component<TagProps, any> {
    constructor(props: TagProps) {
        super(props);
        this.state = {
            selected: props.selected
        }
    }

    static defaultProps = {
        readonly: true,
        fill: false,
        color: variables.color_label,
        activeColor: variables.color_link,
        style: null,
        size: 'default',
        selected: false,
    };

    componentWillReceiveProps (nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected,
            });
        }
    }

    onClick = () => {
        const { readonly, onChange } = this.props;
        if (readonly) {
            return;
        }

        const isSelect: boolean = this.state.selected;
        this.setState({
            selected: !isSelect,
        }, () => {
            if (onChange) {
                onChange(!isSelect);
            }
        });
    };

    render() {
        const {
            readonly, fill, color, children, style, size,
            activeColor, ...restProps
        } = this.props;
        const selected = this.state.selected;

        let sty: object = {};
        let textSty: object  = {};

        if (fill) {
            sty = {
                backgroundColor: selected ? activeColor : color,
                borderWidth: 0
            };
            textSty = {
                color: '#fff'
            };
        } else {
            sty = {
                borderColor: selected ? activeColor : color,
            };
            textSty = {
                color: selected ? activeColor : color,
            }

        }

        let textSizeSty = styles[`text${size}Sty`];


        if (readonly) {
            return (
                <View style={[styles.wrap]}>
                    <View style={[styles.content, sty, style]} {...restProps}>
                        <Text style={[styles.text, textSizeSty, textSty]}>
                            { children }
                        </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[styles.wrap]}>
                    <TouchableWithoutFeedback onPress={this.onClick}>
                        <View style={[styles.content, sty, style]} {...restProps}>
                            <Text style={[styles.text, textSizeSty, textSty]}>
                                { children }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
        }

    }

}

