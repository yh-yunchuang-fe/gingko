/**
 * Created by beilunyang on 2018/2/11
 */
import React from 'react'
import {
    Text,
    StyleSheet,
} from 'react-native'
import {
    Button,
    Picker,
    WhiteSpace,
    WingBlank
} from '../../../components/index'

export default () => {
    const [state, setState] = React.useState({
        value: ['2014', '2', '11'],
        value2: '',
        value3: '',
        visible: false,
        visible2: false,
        visible3: false,
    })

    const handleDismiss = () => {
        setState({
            ...state,
            visible: false,
            visible2: false,
            visible3: false,
        })
    }

    const handleOk = (value: any) => {
        handleDismiss()
    }

    const handlePicker = (visible: string) => {
        setState({
            ...state,
            [visible]: true,
        })
    }

    return (
        <WingBlank>
            <WhiteSpace/>
            <Button line onClick={() => {handlePicker('visible2')}}>单列Picker-({state.value2})</Button>
            <WhiteSpace/>
            <Button line onClick={() => {handlePicker('visible')}}>多列Picker-({state.value})</Button>
            <WhiteSpace/>
            <Button line onClick={() => {handlePicker('visible3')}}>自定义Picker-({state.value})</Button>
            <WhiteSpace/>
            <Picker
                title='上拉窗标题栏'
                visible={state.visible}
                data={[ // label是可选的, 不设置就取value的值  label/value 可以是字符串或数字
                    [ 
                        { value: '2010' },
                        { value: '2011' },
                        { value: '2012' },
                        { value: '2013' },
                        { value: '2014' },
                        { value: '2015' },
                    ],
                    [
                        { label: 1, value: 1 },
                        { label: 2, value: '2' },
                        { label: '3', value: 3 },
                    ],
                    [
                        { label: '10', value: '10' },
                        { label: '11', value: '11' },
                        { label: '12', value: '12' },
                        { label: '13', value: '13' },
                    ]
                ]}
                value={state.value}
                onChange={(values, idx) => {
                    setState({
                        ...state,
                        value: values,
                    })
                }}
                onOk={handleOk}
                onDismiss={handleDismiss}
                style={styles.multiPicker}
                itemStyle={[
                    { color: 'red' },
                    { color: 'gray' },
                    { color: 'blue' }
                ]}
            />
            <Picker
                title='上拉窗标题栏'
                visible={state.visible2}
                onOk={handleOk}
                style={{}}
                onDismiss={handleDismiss}
                value={state.value2}
                onChange={(val, idx) => {
                    setState({
                        ...state,
                        value2: val,
                    })
                }}
            >
                <Picker.Item value='gba' label='gba' />
                <Picker.Item value='ps4' label='ps4' />
                <Picker.Item value='ns' label='ns' />
                <Picker.Item value='xbox' label='xbox' />
            </Picker>
            <WhiteSpace/>
            <Text>你也可以让组件自管理状态，即不传value prop,然后通过onOK和onChange回调来获取改变后的值</Text>
        </WingBlank>
    )
}

const styles = StyleSheet.create({
    multiPicker: {
        height: 217,
        paddingHorizontal: -6,
    }
})
