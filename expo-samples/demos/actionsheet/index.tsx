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
    Actionsheet,
    Button,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default () => {
    const [visibleBasic, setVisibleBasic] = React.useState(false)
    const [visibleOptions, setVisibleOptions] = React.useState(false)

    const onChange = (item: any, idx: any) => {
        console.log('onChange===', item, idx)
        setVisibleOptions(false)
    }

    return (
        <View>
            <WhiteSpace/>
            <WingBlank>
                <Button onClick={()=> {
                    setVisibleBasic(true)
                }}>basic</Button>
            </WingBlank>
            <WhiteSpace/>

            <Actionsheet
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
                    <Text>Actionsheet</Text>
                </View>
            </Actionsheet>

            <WingBlank>
                <Button onClick={()=> {
                    setVisibleOptions(true)
                }}>options</Button>
            </WingBlank>

            <Actionsheet
                visible={visibleOptions}
                close='取消'
                onClose={()=> {
                    setVisibleOptions(false)
                }}
                onChange={onChange}
                options={['选项一', '选项二', '选项三', '选项四']}
                title='主标题'
                hint='这是提供二行注释, 通过信息澄清的方式，这是提供一行或二行注释'
                />
        </View>
    )
}
