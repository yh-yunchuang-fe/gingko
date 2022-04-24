/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React from 'react'
import {
    View,
    Text,
    Animated,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import Icon from '../Icon'
import styles from './style'
import ISearchBarProps from './propsType'
import Button from '../Button'
import variables from '@src/style'

function noop() {}

export default class SearchBar extends React.Component<ISearchBarProps, any> {
    public static defaultProps = {
        defaultValue: '',
        placeholder: '搜索关键字',
        searchText: '',
        cancelText: '',
        cancelColor: variables.color_searchBar_icon_close_visible,
        autoFocus: false,
        selectionColor: '#FE8F1D',

        onSubmit: noop,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onSearch: noop,
        onCancel: noop,
        onClear: noop
    }

    public searchInput: any

    public duration = 200

    constructor(props) {
        super(props)
        const value = (props.value || props.defaultValue) || ''
        const showDelete = !!(value && this.props.autoFocus)
        this.state = {
            value,
            showDelete,
            focus: false,
            rightAnim: new Animated.Value(0),
        }
    }

    public componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value,
                showDelete: nextProps.value != ''
            })
        }
    }

    public clearInput = () => {
        const { onClear } = this.props
        this.setState({
            value: '',
            showDelete: false
        })
        onClear && onClear()
    }

    public onChangeText = (value: any) => {
        const { onChange } = this.props
        if (value != '') {
            this.setState({
                value,
                showDelete: true
            })
        } else {
            this.setState({
                value,
                showDelete: false
            })
        }
        onChange && onChange(value)
    }

    public onFocus = () => {
        this.setState({
            focus: true
        })

        Animated.timing(
            this.state.rightAnim,
            {
                toValue: 1,
                duration: this.duration,
                useNativeDriver: true
            }
        ).start()
        if (this.props.onFocus) {
            this.props.onFocus()
        }
    }

    public onBlur = () => {
        this.setState({
            focus: false
        })
        this.searchInput.blur()
        Animated.timing(
            this.state.rightAnim,
            {
                toValue: 0,
                duration: this.duration,
                useNativeDriver: true
            }
        ).start()
        if (this.props.onBlur) {
            this.props.onBlur()
        }
    }

    public onCancel = () => {
        this.onBlur()
        if (this.props.onCancel) {
            this.props.onCancel(this.state.value)
        }
    }

    public onSearch = () => {
        this.onBlur()
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value)
        }
    }

    public onSubmit = (e: any) => {
        e.preventDefault()
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.value)
        }
    }

    public render() {
        const {
            placeholder, searchText, selectionColor, cancelText, cancelColor, style, autoFocus,
            onChange, onSubmit, onFocus, onBlur, onCancel, onClear,
            ...restProps
        } = this.props

        const { value, showDelete } = this.state

        return (
            <View style={styles.wrapper}>
                <View style={styles.inputWrapper}>
                    <View style={styles.searchIcon}>
                        <Icon 
                            name='icon-search' 
                            color={variables.color_searchBar_icon_search}
                            size={variables.width_searchBar_icon_search}/>
                    </View>
                    <TextInput
                        {...restProps}
                        ref={(searchInput)=> { this.searchInput = searchInput }}
                        autoFocus={autoFocus}
                        value={value}
                        placeholder={placeholder}
                        selectionColor={selectionColor}
                        style={[styles.input, style]}
                        underlineColorAndroid='transparent'
                        clearButtonMode='never'
                        onChangeText={this.onChangeText}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSubmitEditing={this.onSubmit}
                    />
                    {
                        showDelete &&
                        <TouchableOpacity onPress={this.clearInput} style={styles.deleteIcon}>
                            <Icon 
                                name='icon-closeText' 
                                size={variables.width_searchBar_icon_close} 
                                color={variables.color_searchBar_icon_close_visible}/>
                        </TouchableOpacity>
                    }
                </View>
                
                {!!cancelText && <TouchableOpacity 
                    onPress={this.onCancel} 
                    style={styles.cancelBtn}>
                    <Text>{cancelText}</Text>
                </TouchableOpacity>}

                {!!searchText && <Button 
                    size='sm' 
                    onClick={this.onSearch} 
                    style={styles.searchBtn}>
                        {searchText}
                    </Button>}
            </View>
        )
    }
}
