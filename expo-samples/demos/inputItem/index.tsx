/**
 * Created by beilunyang on 2018/2/11
 */
import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { InputItem, WingBlank, WhiteSpace } from '../../../components/index';

export default () => {
    const [state, setState] = React.useState({
        value: '',
        ok: false,
        error: false,
        errorHint: '',

        value2: '',
        ok2: false,
        error2: false,
        errorHint2: '',
    })

    const onChange = (text) => {
        setState({
            ...state,
            value: text,
        });
    }

    const onBlur = (value) => {
        // 188-5689-8921
        if (value.length === 13) {
            setState({
                ...state,
                ok: true,
                error: false,
            });
        } else {
            setState({
                ...state,
                ok: false,
                error: true,
                errorHint: '请输入正确的手机号码',
            });
        }
    }

    const onChange2 = (text) => {
        setState({
            ...state,
            value2: text,
        });
    }

    const onBlur2 = (value) => {
        const val = value.trim();
        if (val.length > 0 && val.length < 5) {
            setState({
                ...state,
                ok2: true,
                error2: false,
            });
        } else {
            setState({
                ...state,
                ok2: false,
                error2: true,
                errorHint2: '请输入合适的昵称',
            });
        }
    }

    const onFocus = () => {
        setState({
            ...state,
            ok: false,
            error: false,
            errorHint: '',
        });
    }

    const onFocus2 = () => {
        setState({
            ...state,
            ok2: false,
            error2: false,
            errorHint2: '',
        });
    }

    // InputItem为受控组件，请务必设置value属性
    return (
        <View>
            <WingBlank>
                <InputItem
                    type='phone'
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    ok={state.ok}
                    error={state.error}
                    errorHint={state.errorHint}
                    placeholder='请输入正确的手机号码'
                    value={state.value}
                >手机号码</InputItem>
                <WhiteSpace />
                <InputItem
                    onChange={onChange2}
                    onBlur={onBlur2}
                    onFocus={onFocus2}
                    ok={state.ok2}
                    error={state.error2}
                    errorHint={state.errorHint2}
                    placeholder='请输入合适的用户名'
                    value={state.value2}
                >用户名</InputItem>
                <WhiteSpace />
                <InputItem
                    type='password'
                    placeholder='请输入密码'
                    // ... value, onChange, onBlur, onFocus等等
                >密码</InputItem>
            </WingBlank>
            <WhiteSpace/>
            <View style={{backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 15}}>
                <InputItem
                    inputStyle={{
                        backgroundColor: 'transparent',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderColor: '#ddd'
                    }}
                    type='phone'
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    ok={state.ok}
                    error={state.error}
                    errorHint={state.errorHint}
                    placeholder='请输入正确的手机号码'
                    value={state.value}
                >手机号码</InputItem>
            </View>
        </View>
    )
}
