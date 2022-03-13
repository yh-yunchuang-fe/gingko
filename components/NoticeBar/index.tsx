/**
 * @author zhangyi
 * @date 2018/3/19
 */
import React from 'react'
import {
    View,
    Text, 
    TouchableWithoutFeedback
} from 'react-native'
import NoticeBarProps from './propsType'
import styles from './style/index'
import Icon from '../Icon'
import variables from '../../src/style/variables'

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
    public static defaultProps = {
        color: variables.color_label,
        mode: '',
        icon: '',
        action: '',
        bgColor: variables.fill_notice
    };

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    public onClick = () => {
        const { mode, onClick } = this.props;
        if (onClick) {
            onClick()
        }
        if (mode === 'closeable') {
            this.setState({
                show: false
            })
        }
    };

    public render() {
        if (!this.state.show) {
            return null
        }
        const {
            children, icon, action, color, mode, style, bgColor
        } = this.props;

        let operationDom: any = null;
        let actionDom: any = null;
        const colorSty = color ? { color } : null;

        if (action) {
            if (typeof action === 'string') {
                actionDom = (
                    <Text style={[styles.action, colorSty]}>{ action }</Text>
                )
            } else {
                actionDom = action;
            }
        }

        if (mode === 'link') {
            operationDom = (
                <View style={styles.actionWrap}>
                    { action ? actionDom : <Icon name='chevron-right' size={12} style={colorSty}/>}
                </View>
            )
        } else if(mode === 'closeable') {
            operationDom = (
                <TouchableWithoutFeedback onPress={this.onClick}>
                    <View style={styles.actionWrap}>
                        {action ? actionDom : <Icon name='close' size={12} style={colorSty}/>}
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        let childrenDom: any = null;
        if (typeof children === 'string') {
            childrenDom = (
                <Text style={[styles.content, colorSty]}>{ children }</Text>
            )
        } else {
            childrenDom = children
        }
        const mainDom = (
            <View style={[styles.noticeBar, style, {backgroundColor: bgColor}]}>
                { icon ? <Icon name={icon} size={14} style={[styles.icon, colorSty]}/> : null }
                <View style={styles.container}>
                    { children ? childrenDom : null }
                </View>
                { operationDom }
            </View>
        );

        return mode === 'link' ? (
            <TouchableWithoutFeedback onPress={this.onClick}>
                { mainDom }
            </TouchableWithoutFeedback>
        ) : mainDom;
    }
}
