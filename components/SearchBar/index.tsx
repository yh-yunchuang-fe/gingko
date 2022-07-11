/**
 * @author zhangyi
 * @date 2018/3/15
 */
import React, { useEffect, useState } from 'react'
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

export default function SearchBar(props: ISearchBarProps) {
    const {
        style,
        // defaultValue = '',
        placeholder = '搜索关键字',
        searchText = '',
        cancelText = '',
        // cancelColor = variables.color_searchBar_icon_close_visible,
        autoFocus = false,
        selectionColor = '#FE8F1D',
    } = props

    let searchInput: any

    const duration = 200

    const value = (props.value || props.defaultValue) || ''
    const showDelete = !!(value && props.autoFocus)
    const [state, setState] = useState({
        value,
        showDelete,
        focus: false,
        rightAnim: new Animated.Value(0),
    })

    useEffect(() => {
        if (props.value && props.value !== state.value) {
            setState({
                ...state,
                value: props.value,
                showDelete: props.value != ''
            })
        }
    }, [props.value])

    const clearInput = () => {
        setState({
            ...state,
            value: '',
            showDelete: false
        })
        !!props.onClear && props.onClear()
    }

    const onChangeText = (val: any) => {
        if (val != '') {
            setState({
                ...state,
                value: val,
                showDelete: true
            })
        } else {
            setState({
                ...state,
                value: val,
                showDelete: false
            })
        }
        !!props.onChange && props.onChange(value)
    }

    const onFocus = () => {
        setState({
            ...state,
            focus: true
        })

        Animated.timing(
            state.rightAnim,
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start()

        !!props.onFocus && props.onFocus()
    }

    const onBlur = () => {
        setState({
            ...state,
            focus: false
        })
        searchInput.blur()
        Animated.timing(
            state.rightAnim,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start()

        !!props.onBlur && props.onBlur()
    }

    const onCancel = () => {
        onBlur()

        !!props.onCancel && props.onCancel(state.value)
    }

    const onSearch = () => {
        onBlur()
        if (props.onSearch) {
            props.onSearch(state.value)
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        !!props.onSubmit && props.onSubmit(state.value)
    }

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
                    {...props?.restProps}
                    ref={(input)=> { searchInput = input }}
                    autoFocus={autoFocus}
                    value={state.value}
                    placeholder={placeholder}
                    selectionColor={selectionColor}
                    style={[styles.input, style]}
                    underlineColorAndroid='transparent'
                    clearButtonMode='never'
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSubmitEditing={onSubmit}
                />
                {
                    !!state.showDelete &&
                    <TouchableOpacity onPress={clearInput} style={styles.deleteIcon}>
                        <Icon 
                            name='icon-closeText' 
                            size={variables.width_searchBar_icon_close} 
                            color={variables.color_searchBar_icon_close_visible}/>
                    </TouchableOpacity>
                }
            </View>
            
            {!!cancelText && <TouchableOpacity 
                onPress={onCancel} 
                style={styles.cancelBtn}>
                <Text>{cancelText}</Text>
            </TouchableOpacity>}

            {!!searchText && <Button 
                size='sm' 
                onClick={onSearch} 
                style={styles.searchBtn}>
                    {searchText}
                </Button>}
        </View>
    )
}
