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
    const [visible, setVisible] = React.useState(false)

    return (
        <View>
            <WhiteSpace/>
            <WingBlank>
                <Button
                    onClick={()=>{
                        setVisible(true)
                    }}
                >basic</Button>
            </WingBlank>
            <Popup
                visible={visible}
                onClose={()=>{
                    setVisible(false)
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
        </View>
    )
}