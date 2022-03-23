/**
 * Created by beilunyang on 2018/2/11
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    Button,
    WhiteSpace,
    Picker,
} from '../../../components/index';

const styles = StyleSheet.create({
    multiPicker: {
        backgroundColor: 'red',
        height: 217,
    },
    singlePicker: {
        backgroundColor: 'yellowgreen',
    },
});

export default () => {
    const [state, setState] = React.useState({
        value: ['2014', '2', '11'],
        value2: '',
        visible: false,
        visible2: false,
    })

    const handleDismiss = () => {
        setState({
            ...state,
            visible: false,
            visible2: false,
        });
    }

    const handleOk = (value: any) => {
        console.log('ok callback:', value);
        handleDismiss();
    };

    const handlePicker = () => {
        setState({
            ...state,
            visible: true,
        });
    }

    const handlePicker2 = () => {
        setState({
            ...state,
            visible2: true,
        });
    }

    return (
        <View>
            <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>
                {state.value}
            </Text>
            <Text style={{ fontSize: 24, color: '#000', textAlign: 'center', height: 40 }}>
                {state.value2}
            </Text>
            <Button onClick={handlePicker}>多列Picker</Button>
            <WhiteSpace/>
            <Button onClick={handlePicker2}>单列Picker</Button>
            <Picker
                title="多列"
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
                    ],
                ]}
                value={state.value}
                onChange={(values, idx) => {
                    setState({
                        ...state,
                        value: values,
                    });
                }}
                onOk={handleOk}
                onDismiss={handleDismiss}
                style={styles.multiPicker}
                columnStyle={[
                    {
                        backgroundColor: 'yellow',
                    },
                ]}
                itemStyle={[
                    { color: 'red' },
                    { color: 'gray' },
                    { color: 'blue' }
                ]}
            />
            <Picker
                title="单列"
                visible={state.visible2}
                onOk={handleOk}
                style={styles.singlePicker}
                onDismiss={handleDismiss}
                value={state.value2}
                onChange={(val, idx) => {
                    setState({
                        ...state,
                        value2: val,
                    });
                }}
            >
                <Picker.Item value="gba" label="gba" />
                <Picker.Item value="ps4" label="ps4" />
                <Picker.Item value="ns" label="ns" />
                <Picker.Item value="xbox" label="xbox" />
            </Picker>
            <WhiteSpace/>
            <Text>你也可以让组件自管理状态，即不传value prop,然后通过onOK和onChange回调来获取改变后的值</Text>
        </View>
    )
}