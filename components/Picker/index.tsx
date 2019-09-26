/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import {
    Picker,
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AndroidPicker from './Picker.android';
import MultiPicker from './MultiPicker';
import Popup from '../Popup';
import {
    IItemProps,
    IPickerProps,
} from './propsType';
import styles from './style';

const isAndroid = Platform.OS === 'android';

export default class extends React.Component<IPickerProps, any> {

    static Item = Picker.Item;

    static defaultProps: IPickerProps = {
        dismissText: '取消',
        okText: '确定',
        onDismiss: () => {},
        onOk: () => {},
        title: '',
        data: [],
        style: {},
        itemStyle: [],
        columnStyle: [],
        visible: false,
    };

    state = {
        value: this.props.value || this.props.defaultValue,
    };

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            });
        }
    }

    renderHeader = () => {
        const {
            dismissText,
            onOk,
            onDismiss,
            okText,
            title,
        } = this.props;
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={onDismiss}>
                    <Text style={styles.dismiss}>{dismissText}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={(onOk as Function).bind(null, this.state.value)}>
                    <Text style={styles.ok}>{okText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderItems = (group: IItemProps[]) => {
        return group.map(({ label, value }, idx) => {
            if (label === undefined || label === null) {
                return (
                    <Picker.Item label={String(value)} value={value} key={idx} />
                );
            }
            return (
                <Picker.Item label={String(label)} value={value} key={idx} />
            );
        });
    }

    renderCols = () => {
        const { data } = this.props;
        if (Array.isArray(data)) {
            return data.map((group, idx) => {
                return (
                    isAndroid ?
                    <AndroidPicker key={idx}>
                        {this.renderItems(group)}
                    </AndroidPicker> : <Picker key={idx}>
                        {this.renderItems(group)}
                    </Picker>
                );
            });
        }
        return null;
    }

    onChange = (values, idx) => {
        const { onChange } = this.props;
        if (!('value' in this.props)) {
            this.setState({
                value: values,
            });
        }
        if (onChange) {
            onChange(values, idx);
        }
    }

    renderPicker = () => {
        const {
            value,
            onChange,
            children,
            style,
            itemStyle,
            columnStyle,
            ...rest
        } = this.props;
        if (children) {
            const itemSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle;
            const columnSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle;
            return (
                isAndroid ? <AndroidPicker
                    {...rest}
                    itemStyle={StyleSheet.flatten(itemSty)}
                    style={StyleSheet.flatten([style, columnSty])}
                    onValueChange={this.onChange}
                    selectedValue={this.state.value}
                >
                    {children}
                </AndroidPicker> : <Picker
                    {...rest}
                    itemStyle={StyleSheet.flatten(itemSty)}
                    style={StyleSheet.flatten([style, columnSty])}
                    onValueChange={this.onChange}
                    selectedValue={this.state.value}
                >
                    {children}
                </Picker>
            );
        }
        const itemSty = Array.isArray(itemStyle) ? itemStyle : [itemStyle];
        const columnSty = Array.isArray(columnStyle) ? columnStyle : [columnStyle];
        return (
            <MultiPicker
                {...rest}
                style={style}
                itemStyle={itemSty}
                columnStyle={columnSty}
                onChange={this.onChange}
                value={this.state.value}
            >
                {this.renderCols()}
            </MultiPicker>
        );
    }

    render() {
        const {
            visible,
        } = this.props;
        return (
            <Popup
                visible={visible as boolean}
            >
                <View style={styles.container}>
                    {this.renderHeader()}
                    {this.renderPicker()}
                </View>
            </Popup>
        );
    }
}
