/**
 * @author zhangyi
 * @date 2018/3/28
 */
import React from 'react'
import {
    Text,
    View
} from "react-native";
import styles from './style/index'
import Icon from '../Icon'

interface ResultProps {
    img?: React.ReactNode;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    style?: any;
}

export default class Result extends React.Component<ResultProps, any> {
    static defaultProps = {
        img: <Icon name="alert" size={40}/>,
        message: '暂无数据'
    };

    constructor(props) {
        super(props)
    }

    render() {
        const {
            style, img, title, message
        } = this.props;

        let titleDom:any = null;
        if (title) {
            if (React.isValidElement(title)) {
                titleDom = title;
            } else if (typeof title === 'string') {
                titleDom = <Text style={styles.title}>{title}</Text>
            }
        }

        let messageDom:any = null;
        if (message) {
            if (React.isValidElement(message)) {
                messageDom = message;
            } else if (typeof message === 'string') {
                messageDom = <Text style={styles.message}>{ message }</Text>
            }
        }

        return (
            <View style={[styles.result, style]}>
                { img }
                { titleDom }
                { messageDom }
            </View>
        )
    }
}
