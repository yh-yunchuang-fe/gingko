/**
 * Created by beilunyang on 2018/3/14
 */
import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import Icon from '../Icon'
import styles from './style'
import { ICheckbox } from './propsType'
import variables from '@src/style/'

export default function Checkbox(props: ICheckbox) {
    const {
        icon = true,
        dir = 'left',
        defaultChecked = false,
        onChange,
        style = {},
        textStyle = {},
        disabled = false,
        children,
        ...restProps
    } = props

    let initChecked: boolean = false
    if (typeof props.checked === 'boolean') {
        initChecked = props.checked
    } else {
        initChecked = defaultChecked!
    }

    const [checked, setChecked] = React.useState(initChecked)

    React.useEffect(() => {
        if (typeof props.checked === 'boolean') {
            setChecked(props.checked)
        }
    }, [props.checked])

    const handleClick = () => {
        if (!(typeof props.checked === 'boolean')) {
            setChecked(!checked)
        }
        if (props.onChange) {
            props.onChange(!checked)
        }
    }

    const getCheckedColor = (check: boolean) => {
        if(disabled && check ) {
            return {color: variables.color_checkbox_icon_selected_disable, icon: 'icon-checkbox-checked'}
        } else if(disabled) {
            return {icon: 'icon-unchecked-disabled'}
        } else if(check) {
            return {color: variables.color_checkbox_icon_selected_default, icon: 'icon-checkbox-checked'}
        } else {
            return {icon: 'icon-unchecked'}
        }
    }

    const renderIcon = () => {
        if (typeof icon === 'function') {
            // tslint:disable-next-line:no-shadowed-variable
            const elements: any = icon({ checked })
            if (React.isValidElement(elements)) {
                return elements
            }
        }

        if (typeof icon === 'boolean' && icon) {
            const defaultIcon = (check: any) => {
                const checkColor = getCheckedColor(check)
                const iconName = checkColor?.icon

                return (
                    <View style={styles.icon}>
                        <Icon name={iconName} color={checkColor?.color} />
                    </View>
                )
            }
            return defaultIcon(checked)
        }

        return null
    }

    let elements: any = null
    if (React.isValidElement(children)) {
        elements = children
    }

    if (typeof children === 'string') {
        elements = <Text style={[styles.checkboxText, textStyle]}>{children}</Text>
    }

    return (
        <TouchableOpacity
            {...restProps}
            onPress={handleClick}
            disabled={disabled}
        >
            <View style={[styles.container, style]}>
                {dir === 'left' && renderIcon()}
                {elements}
                {dir === 'right' && renderIcon()}
            </View>
        </TouchableOpacity>
    )
}
