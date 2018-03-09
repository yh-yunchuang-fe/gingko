/**
 * @author zhangyi
 * @date 2018/3/9
 */
import React from 'react';
import {
    View,
    Text,
} from 'react-native'
import styles from './style/index'
import TagProps from './propsType'

export default class Tag extends React.Component<TagProps, any> {
    constructor(props: TagProps) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>tag</Text>
            </View>
        )
    }

}

