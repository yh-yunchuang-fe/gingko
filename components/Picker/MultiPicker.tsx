/**
 * Created by beilunyang on 2018/4/10
 */
import * as React from 'react';
import {
    View,
} from 'react-native';

export default class MultiPicker extends React.Component<any, any> {
    getValue = () => {
        const {
            children,
            value,
        } = this.props;

        if (Array.isArray(value) && value.length > 0) {
            return value;
        }

        if (!children) {
            return [];
        }

        return React.Children.map(children, (col: any) => {
            const items: any = React.Children.toArray(col.props.children);
            return items[0] && items[0].props.value;
        });
    }

    onChange = (idx, val, cb) => {
        const values = this.getValue();
        values[idx] = val;
        if (cb) {
           cb(values, idx);
        }
    }

    render() {
        const {
            children,
            onChange,
            style,
            itemStyle,
            columnStyle,
            ...rest
        } = this.props;
        const elements = React.Children.map(children, (col: any, idx) => {
            return React.cloneElement(col, {
                ...rest,
                selectedValue: this.getValue()[idx],
                onValueChange: (val) => {
                    this.onChange(idx, val, onChange);
                },
                style: { flex: 1, ...columnStyle[idx] },
                itemStyle: itemStyle[idx],
            });
        });
        return (
            <View style={[{ flexDirection: 'row',justifyContent: 'center' }, style]}>
                {elements}
            </View>
        );
    }
}