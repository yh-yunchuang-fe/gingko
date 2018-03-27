import React, { Component } from 'react'
import {
    ScrollView
} from 'react-native'
import {
    Icon,
    Grid,
} from '../../../components/index'

const list = ['arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
    'close', 'back', 'camera', 'close-circle', 'eye-off',
    'more', 'unchecked', 'scan', 'search', 'checked',
    'radio-on', 'radio-off', 'eye', 'alert',
    'flash-circle', 'checkmark', 'left-circle', 'right-circle'
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