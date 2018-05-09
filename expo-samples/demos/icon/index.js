import React, { Component } from 'react'
import {
    ScrollView
} from 'react-native'
import {
    Icon,
    Grid,
} from '../../../components/index'

const list = [
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'back-home',
    'back',
    'camera',
    'close-circle',
    'eye-off',
    'more',
    'unchecked',
    'scan',
    'search',
    'checked',
    'radio-on',
    'radio-off',
    'eye',
    'alert',
    'flash-circle',
    'checkmark',
    'chevron-left-circle',
    'chevron-right-circle',
    'trashcan',
    'close',
    'chevron-down-circle',
    'edit',
    'arrow-down',
    'light-off',
    'light-on',
    'arrow-up',
    'minus',
    'order',
    'plus',
    'remark-active',
    'remark',
    'triangle-down',
    'triangle-up',
    'chevron-up-circle',
    'close-circle-o',
    'user-check',
    'edit-plus',
    'bell'
];
export default class IconDemo extends Component {
    render() {
        const data = list.map((item)=>{
            return {
                icon: (<Icon name={item} size="md"/>),
                text: item
            }
        });
        return (
            <ScrollView style={{flex: 1}}>
                <Grid
                    data={data}
                />
            </ScrollView>
        )
    }
}