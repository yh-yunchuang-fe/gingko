/**
 * Creatd by suki on 2018/12/13.
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Body } from '../../../components'
 
export default class BodyDemo extends Component {
    state = { };

    render() {
        return (
            <Body>
                <Text>Body</Text>

                <Body style={{paddingHorizontal: 20, paddingVertical: 10}}>
                    <Body style={{backgroundColor: 'skyblue'}}>
                            <Text>Body</Text>
                    </Body>
                    <Body style={{backgroundColor: 'yellow'}}>
                            <Text>Body</Text>
                    </Body>
                </Body>


                <Body style={{backgroundColor: '#24a8e8'}}>
                    <Text>Body</Text>
                    <Body style={{margin: 20}}>
                        <Text>Body</Text>
                    </Body>
                </Body>
            </Body>
        )
    }
}