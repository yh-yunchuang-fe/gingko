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
        size: 'small',
        text: '',
        style: {},
        textStyle: {},
        corner: false,
        bgColor: variables.color_link,
        color: variables.color_white,
    };

    render() {
        const {
            size,
            bgColor,
            color,
            style,
            textStyle,
            overflowCount,
            children,
            corner,
        } = this.props;
        let { text } = this.props;
        let sty: any = null;
        if (size === 'small') {
            sty = {
                borderRadius: variables.radius_sm,
            };
        }
        if (overflowCount && typeof text === 'number' && text > overflowCount) {
            text = `${overflowCount}+`;
        }
        let contentElements: any = null;
        if (corner) {
            contentElements = (
               <View style={[styles.cornerContainer, style]}>
                   <Text style={[styles.cornerText, { color, backgroundColor: bgColor }, textStyle]}>{text}</Text>
               </View>
            );
        } else {
            contentElements = (
                <View style={[styles.contentContainer, sty, style]}>
                    <Text style={[styles[size as string], { color, backgroundColor: bgColor }, textStyle]}>
                        {text}
                    </Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {children}
                {contentElements}
            </View>
        );
    }
}
