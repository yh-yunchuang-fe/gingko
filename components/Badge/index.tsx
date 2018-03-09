/**
 * Created by beilunyang on 2018/3/7
 */
import * as React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style';
import variables from '../../src/style/variables';
import { IBadge } from './propsType';

export default class Badge extends React.Component<IBadge, any> {
    static defaultProps = {
        text: '',
        style: {},
        dot: false,
        overflowCount: 99,
        bgColor: variables.fill_badge,
        color: variables.color_white,
    };

    render() {
        const {
            bgColor, color, style, overflowCount,
            children, dot, ...restProps
        } = this.props;

        let { text } = this.props;

        if (overflowCount && typeof text === 'number' && text > overflowCount) {
            text = `${overflowCount}+`;
        }
        let contentElement: any = null;

        if (dot) {
            contentElement = (
                <View {...restProps} style={[styles.dot]}/>
            )
        } else {
            contentElement = (
                <View {...restProps} style={[styles.cornerDom, { backgroundColor: bgColor }]}>
                    <Text style={[styles.text, {color: color}]}>{text}</Text>
                </View>
            )
        }

        return (
            <View style={[styles.wrap, style]}>
                <View>
                    {children}
                    {contentElement}
                </View>
            </View>
        );
    }
}
