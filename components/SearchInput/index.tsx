/**
 * @author zhangyi
 * @date 2018/4/18
 */
import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    Text, Animated
} from "react-native";
import Icon from '../Icon'
import styles from './style/index'
import SearchInputProps from './propsType'

function noop() {}

export default class SearchInput extends React.Component<SearchInputProps, any> {
    static defaultProps = {
        defaultValue: '',
        placeholder: 'Search',
        autoFocus: false,

        onSubmit: noop,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onClear: noop
    };

    searchInput:any = null;

    constructor(props) {
        super(props);
        const value = this.props.defaultValue || '';
        const showDelete = !!(value && this.props.autoFocus);
        this.state = {
            value,
            showDelete,
            focus: false,
        }
    }

    clearInput = () => {
        this.setState({
            value: '',
            showDelete: false
        })
    };

    onChangeText = (value) => {
        const { onChange } = this.props;
        if (value != '') {
            this.setState({
                value,
                showDelete: true
            });
        } else {
            this.setState({
                value,
                showDelete: false
            });
        }
        onChange && onChange(value);
    };

    onFocus = () => {
        this.setState({
            focus: true
        });

        if (this.props.onFocus) {
            this.props.onFocus();
        }
    };

    onBlur = () => {
        this.setState({
            focus: false
        });
        this.searchInput.blur();

        if (this.props.onBlur) {
            this.props.onBlur();
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.value);
        }
    };

    render() {
        const {
            placeholder, style, autoFocus, wrapStyle,
            onChange, onSubmit, onFocus, onBlur, onClear,
            ...restProps
        } = this.props;

        const { value, showDelete } = this.state;

        return (
            <View style={[styles.inputWrapper, wrapStyle]}>
                <Icon style={styles.searchIcon} name="search"/>
                <TextInput
                    {...restProps}
                    ref={(searchInput)=>{ this.searchInput = searchInput }}
                    autoFocus={autoFocus}
                    value={value}
                    placeholder={placeholder}
                    style={[styles.input, style]}
                    underlineColorAndroid="transparent"
                    clearButtonMode="never"
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSubmitEditing={this.onSubmit}
                />
                {
                    showDelete &&
                    <TouchableOpacity onPress={this.clearInput}>
                        <Icon name="close-circle" size={18} style={styles.deleteIcon}/>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}