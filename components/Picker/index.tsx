/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import {
    Picker,
    Text,
    TouchableOpacity,
    View,
    Platform,
} from 'react-native';
import AndroidPicker from './picker.android';
import Popup from '../Popup';
import { IPickerProps } from './propsType';
import styles from './style';

const isAndroid = Platform.OS === 'android';

export default class extends React.Component<IPickerProps, any> {

    static Item = Picker.Item;

    private static defaultProps: IPickerProps = {
        dismissText: '取消',
        okText: '确定',
        onDismiss: () => {},
        onOk: () => {},
        title: '',
        data: [],
        visible: false,
    };

    state = {
        selectedValue: '',
    };

    private onChange = (value) => {
        this.setState({
            selectedValue: value,
        });
    };

    private renderHeader() {
        const {
            dismissText,
            onOk,
            onDismiss,
            okText,
            title,
            headerStyle,
        } = this.props;
        return (
            <View style={[styles.header, headerStyle]}>
                <TouchableOpacity onPress={onDismiss}>
                    <Text style={styles.dismiss}>{dismissText}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={(onOk as Function).bind(null, this.state.selectedValue)}>
                    <Text style={styles.ok}>{okText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    private renderItems() {
        const {
            children,
            data,
        } = this.props;
        if (children) {
            if (Array.isArray(children)) {
                for (const node of children) {
                    if (!React.isValidElement(node)) {
                        console.warn('Children contains invalid react element');
                        return null;
                    }
                }
            } else {
                if (!React.isValidElement(children)) {
                    console.warn('Children contains invalid react element');
                    return null;
                }
            }
            return children;
        }
        return (data as string[]).map((value: string, idx: number) => <Picker.Item label={value} value={value} key={idx} />);
    }

    renderPicker() {
        const Pick = isAndroid ? AndroidPicker : Picker;
        const {
            selectedValue,
            ...restProps,
        } = this.props;
        return (
            <Pick
                {...restProps}
                onValueChange={this.onChange}
                selectedValue={this.state.selectedValue || selectedValue}
            >
                {this.renderItems()}
            </Pick>
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
