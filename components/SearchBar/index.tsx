/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React from 'react'
import {
    View,
    Animated,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import Icon from '../Icon'
import styles from './style/index'
import ISearchBarProps from './propsType'
import variables from '../../src/style/variables';

function noop() {}

export default class SearchBar extends React.Component<ISearchBarProps, any> {
    static defaultProps = {
        defaultValue: '',
        placeholder: 'Search',
        showCancel: true,
        cancelText: '取消',
        cancelColor: variables.color_base,
        autoFocus: false,

        onSubmit: noop,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onCancel: noop,
        onClear: noop
    };

    searchInput: any;

    duration = 200;

    constructor(props) {
        super(props);
        const value = (props.value || props.defaultValue) || '';
        const showDelete = !!(value && this.props.autoFocus);
        this.state = {
            value,
            showDelete,
            focus: false,
            rightAnim: new Animated.Value(0),
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value,
                showDelete: nextProps.value != ''
            });
        }
    }

    clearInput = () => {
        const { onClear } = this.props;
        this.setState({
            value: '',
            showDelete: false
        });
        onClear && onClear()
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

        Animated.timing(
            this.state.rightAnim,
            {
                toValue: 1,
                duration: this.duration
            }
        ).start();
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    };

    onBlur = () => {
        this.setState({
            focus: false
        });
        this.searchInput.blur();
        Animated.timing(
            this.state.rightAnim,
            {
                toValue: 0,
                duration: this.duration
            }
        ).start();
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    };

    onCancel = () => {
        this.onBlur();
        if (this.props.onCancel) {
            this.props.onCancel(this.state.value)
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
            placeholder, showCancel, cancelText, cancelColor, style, autoFocus,
            onChange, onSubmit, onFocus, onBlur, onCancel, onClear,
            ...restProps
        } = this.props;

        const { value, showDelete } = this.state;

        const slide = {
            marginRight: this.state.rightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0]
            })
        };

        return (
            <View style={styles.wrapper}>
                <View style={styles.inputWrapper}>
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
                {
                    showCancel &&
                    <Animated.View style={[styles.cancel, slide]}>
                        <TouchableOpacity onPress={this.onCancel}>
                            <Text style={[styles.cancelText, {color: cancelColor}]}>
                                {cancelText}
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                }
            </View>
        )
    }


}
