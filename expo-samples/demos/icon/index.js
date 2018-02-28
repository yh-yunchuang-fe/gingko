import React, { Component } from 'react'
import {
    ScrollView
} from 'react-native'
import {
    Icon,
    Grid,
} from '../../../components/index'

const list = ['arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
    'back-home', 'back', 'camera', 'delete-circle', 'invisible',
    'more', 'ok', 'scan', 'search', 'selected-multi-noraml',
    'selected-single', 'unselected-normal', 'visible', 'warning',
    'reminder'
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