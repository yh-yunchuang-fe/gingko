/**
 * Created by beilunyang on 2018/2/11
 */
import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { InputItem } from '../../../components/index';
import WhiteSpace from "../../../components/WhiteSpace/index";

export default class InputItemDemo extends Component {
    state = {
        value: '',
        ok: false,
        error: false,
        errorHint: '',

        value2: '',
        ok2: false,
        error2: false,
        errorHint2: '',
    };

    onChange = (text) => {
        this.setState({
            value: text,
        });
    }

    onBlur = (value) => {
        // 188-5689-8921
        if (value.length === 13) {
            this.setState({
                ok: true,
                error: false,
            });
        } else {
            this.setState({
                ok: false,
                error: true,
                errorHint: '请输入正确的手机号码',
            });
        }
    }

    onChange2 = (text) => {
        this.setState({
            value2: text,
        });
    }

    onBlur2 = (value) => {
        const val = value.trim();
        if (val.length > 0 && val.length < 5) {
            this.setState({
                ok2: true,
                error2: false,
            });
        } else {
            this.setState({
                ok2: false,
                error2: true,
                errorHint2: '请输入合适的昵称',
            });
        }
    }

    onFocus = () => {
        this.setState({
            ok: false,
            error: false,
            errorHint: '',
        });
    }

    onFocus2 = () => {
        this.setState({
            ok2: false,
            error2: false,
            errorHint2: '',
        });
    }

    render() {
        // InputItem为受控组件，请务必设置value属性
        return (
            <View style={{ alignItems: 'center' }}>
                <InputItem
                    type="phone"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    ok={this.state.ok}
                    error={this.state.error}
                    errorHint={this.state.errorHint}
                    placeholder="请输入正确的手机号码"
                    value={this.state.value}
                >手机号码</InputItem>
                <WhiteSpace />
                <InputItem
                    onChange={this.onChange2}
                    onBlur={this.onBlur2}
                    onFocus={this.onFocus2}
                    ok={this.state.ok2}
                    error={this.state.error2}
                    errorHint={this.state.errorHint2}
                    placeholder="请输入合适的用户名"
                    value={this.state.value2}
                >用户名</InputItem>
                <WhiteSpace />
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    // ... value, onChange, onBlur, onFocus等等
                >密码</InputItem>
            </View>
        );
    }
}
