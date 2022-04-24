import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {
    Icon,
    Radio,
    WhiteSpace,
    WingBlank
} from '../../../components'

const CheckIcon = ({ checked }) => {
    const name = checked ? 'eye' : 'eye-off'
    return (
        <Icon name={name} color='red' style={{marginRight: 8}} />
    )
}

export default () => {
    const [state, setState] = React.useState({
        checkedStyle: {},
        baiduStyle: {},
        singleValue: '',
        value: 1,
    })

    const onChangeRadio = (value: any) => {
        setState({
            ...state,
            value,
        })
    }

    const onChangeChildrenRadio = (data: any) => {
        setState({
            ...state,
            checkedStyle: data ? {
                backgroundColor: 'rgba(254, 143, 29, 0.2)',
            } :  {}
        })
    }

    return <View style={styles.radioContainer}>
        <Text style={styles.description}>单选（样式1）</Text>
        <View style={{flexDirection: 'row'}}>
            <Icon name={'icon-checkmark'} color={'#FE8F1D'} /><WingBlank />
            <Icon name={'icon-checkmark'}/><WingBlank />
        </View>
        <WhiteSpace />
        <View style={{flexDirection: 'row'}}>
            <Text>单选列表已选</Text><WingBlank />
            <Icon name={'icon-checkmark'} color={'#FE8F1D'} />
        </View>
        <WhiteSpace />
        <View style={{flexDirection: 'row'}}>
            <Text>单选列表已选禁用</Text><WingBlank />
            <Icon name={'icon-checkmark'}/>
        </View>

        <Text style={styles.description}>单选（样式2）</Text>
        <View style={{flexDirection: 'row'}}>
            <Icon name={'icon-radio-checked'} color={'#FE8F1D'} /><WingBlank />
            <Icon name={'icon-radio-checked'} color={'rgba(254, 143, 29, 0.5)'} /><WingBlank />
            <Icon name={'icon-unchecked-disabled'}/><WingBlank />
            <Icon name={'icon-unchecked'}/><WingBlank />
        </View>
        <WhiteSpace />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Radio defaultChecked={true}>单选已选</Radio>
                <WhiteSpace />
                <Radio>单选未选</Radio>
                <WhiteSpace />
                <Radio disabled={true}>单选未选禁用</Radio>
                <WhiteSpace />
                <Radio disabled={true} defaultChecked={true}>单选已选禁用</Radio>
            </View>
            <View>
                <Radio
                    checked={state.value === 1}
                    onChange={ () => { onChangeRadio(1) }} >
                    选项一
                </Radio>
                <WhiteSpace />
                <Radio
                    checked={state.value === 2}
                    onChange={ () => { onChangeRadio(2) }} >
                    选项二
                </Radio>
                <WhiteSpace />
                <Radio
                    checked={state.value === 3}
                    onChange={ () => { onChangeRadio(3) }} >
                    选项三
                </Radio>
            </View>
        </View>

        <Text style={styles.description}>自定义（样式2）</Text>

        <Radio
            style={{...styles.radioWrap, ...state.checkedStyle}}
            onChange={onChangeChildrenRadio}>
            <View>
                <Text style={{ marginBottom: 10 }}>李荣斌</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text>待提单: 10</Text>
                    <Text>配送中: 20</Text>
                    <Text>详情</Text>
                </View>
            </View>
        </Radio>
        <WhiteSpace />
        <Radio
            defaultChecked={true}
            dir='right'
            icon={({ checked }) => {
                return checked && <Icon name='icon-checkmark' color={'#FE8F1D'} size={20}/>
            }}
            style={{
                backgroundColor: '#F0F0F0',
                padding: 10,
            }} >
            <Text>custom icon and change the default icon's direction</Text>
        </Radio>
        <WhiteSpace />
        <Radio disabled={true}
            defaultChecked={true}
            icon={CheckIcon}
            textStyle={{ color: 'red' }}>
            自定义禁用按钮
        </Radio>
    </View>
}

const styles = StyleSheet.create({
    radioContainer: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
    },
    radioWrap: {
        backgroundColor: '#F0F0F0',
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    description: {
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'left',
        color: '#FF4E23',
        marginTop: 30,
        marginBottom: 16
    }
})
