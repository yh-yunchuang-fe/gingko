/**
 * @author zhangyi
 * @date 2018/4/20
 */
import React from 'react'
import {
    View,
    Text, TouchableOpacity,
} from "react-native";
import Icon from '../Icon'
import OptionTagProps from './propsType'
import styles from './style/index'

export default class OptionTag extends React.Component<OptionTagProps, any> {
    static defaultProps = {
        disabled: false,
        multiple: false,
        selected: false,
        width: 102,
        height: 40
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected != nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            })
        }
    }

    onChange = () => {
        const { selected } = this.state;
        const { onChange } = this.props;
        console.log('selected:', selected);
        this.setState({
            selected: !selected
        });
        onChange && onChange(!selected);
    };

    render() {
        const {
            width, height, children, style, textStyle,
            disabled, multiple, onChange,
            ...restProps
        } = this.props;
        const selected = this.state.selected;

        let offsetSty = {
            width,
            height
        };



        if (disabled) {
            return (
                <View style={styles.wrap}>
                    <View style={[styles.content, style, styles.disabled, offsetSty]}>
                        <Text style={[styles.text, textStyle, styles.disabledText]}>{ children }</Text>
                    </View>
                </View>
            )
        }

        let activeSty: any = null;
        let activeTextSty: any = null;
        let multipleNode: any = null;
        if (selected) {
            activeSty = styles.active;
            activeTextSty = styles.activeText;

            if (multiple) {
                multipleNode = (
                    <View style={styles.multiple}>
                        <Icon style={styles.multipleIcon} name="checkmark" size={6} color="#fff"/>
                    </View>
                )
            }
        }


        return (
            <View style={styles.wrap}>
                <TouchableOpacity onPress={this.onChange}>
                    <View style={[styles.content, style, activeSty, offsetSty]} {...restProps}>
                        <Text style={[styles.text, textStyle, activeTextSty]}>{ children }</Text>
                        { multipleNode }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


