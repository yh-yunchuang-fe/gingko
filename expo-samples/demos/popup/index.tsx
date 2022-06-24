/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import {
    Popup,
    Button,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default () => {
    const [visibleBasic, setVisibleBasic] = React.useState(false)
    const [visibleClose, setVisibleClose] = React.useState(false)
    const [visibleCancel, setVisibleCancel] = React.useState(false)

    const onChange = () => {
        setVisibleCancel(false)
    }

    return (
        <View>
            <WhiteSpace/>
            <WingBlank>
                <Button line onClick={()=> {
                    setVisibleBasic(true)
                }}>basic</Button>
            </WingBlank>
            <Popup
                visible={visibleBasic}
                onClose={()=> {
                    setVisibleBasic(false)
                }}
                >
                <View style={{
                    height: 150,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Popup</Text>
                </View>
            </Popup>

            <WhiteSpace/>
            <WingBlank>
                <Button line onClick={()=> {
                    setVisibleClose(true)
                }}>close</Button>
            </WingBlank>
            <Popup
                visible={visibleClose}
                onClose={()=> {
                    setVisibleClose(false)
                }}
                onChange={onChange}
                type='close'
                title='主标题'
                hint='这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
                />

            <WhiteSpace/>
            <WingBlank>
                <Button line onClick={()=> {
                    setVisibleCancel(true)
                }}>cancel</Button>
            </WingBlank>
            <Popup
                visible={visibleCancel}
                onClose={()=> {
                    setVisibleCancel(false)
                }}
                onChange={onChange}
                type='cancel'
                title='主标题'
                hint='这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
                >
                    <View style={{
                        height: 500,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        marginTop: 10
                    }}>
                        <Text>{'最小高度屏幕的20% \n 最大高度屏幕的80%'}</Text>
                    </View>
                </Popup>
        </View>
    )
}
