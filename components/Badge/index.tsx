/**
 * Created by beilunyang on 2018/3/7
 */
import * as React from 'react';
import {
    View,
    Text,
    Image,
    Platform, ViewStyle
} from 'react-native';
import styles from './style';
import variables from '../../src/style/variables';
import { IBadge } from './propsType';

export default class Badge extends React.Component<IBadge, any> {
    static defaultProps = {
        text: '',
        style: {},
        dot: false,
        image: false,
        source: '',
        overflowCount: 99,
        bgColor: variables.fill_badge,
        color: variables.color_white,
        cornerContent: null,
        badgeStyle: {},
        badgeTextStyle: {},
        imageBadgeStyle: {},
        top: -10,
        right: -10 //不要超过容器宽度的1/2 to do 兼容任何数字
        // corner: false,
        // cornerContent: null
    };

    render() {
        const {
            bgColor, color, style, overflowCount, cornerContent,
            children, dot, image, source, badgeStyle, badgeTextStyle,
            imageBadgeStyle, top, right, ...restProps
        } = this.props;

        let { text } = this.props;
        let contentElement: any = null;

        let contentStyle = {
            paddingHorizontal: Math.abs(right),
            paddingTop: Math.abs(top)
        }

        let textDomExtraStyle = {
            top: Platform.OS === 'ios' ? top : 0,
            right: Platform.OS === 'ios' ? right : 0,
        }

        // if (corner && cornerContent) {
        //     contentElement = (
        //         <View style={styles}>
        //
        //         </View>
        //     )
        // } else {
        if (cornerContent) {
            contentElement = cornerContent;
        } else {
            if (overflowCount && typeof text === 'number' && text > overflowCount) {
                text = `${overflowCount}+`;
            }

            if (dot) {
                contentElement = (
                    <View {...restProps} style={[styles.dot]}/>
                )
            } else if(image) {
                const imgStyle = {
                    width: '100%',
                    height: '100%',
                    ...imageBadgeStyle
                } as any

                contentElement = (
                    <View {...restProps} style={[styles.textDom, styles.imageTextDom, textDomExtraStyle, badgeStyle]}>
                        <Image source={source} style={imgStyle} />
                        <Text style={[styles.text, {color: color}, styles.imageTextBadge, badgeTextStyle]}>{text}</Text>
                    </View>
                )
            } else {
                contentElement = (
                    <View {...restProps} style={[styles.textDom, textDomExtraStyle, { backgroundColor: bgColor }, badgeStyle]}>
                        <Text style={[styles.text, {color: color}, badgeTextStyle]}>{text}</Text>
                    </View>
                )
            }
        }


        return (
            <View style={[styles.wrap, Platform.OS === 'ios' ? {} : contentStyle, style]}>
                {children}
                {contentElement}
            </View>
        );
    }
}
