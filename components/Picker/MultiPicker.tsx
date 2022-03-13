/**
 * Created by beilunyang on 2018/4/10
 */
import * as React from 'react'
import {
    View,
} from 'react-native'

export default class MultiPicker extends React.Component<any, any> {
    public getValue = () => {
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

    public onChange = (idx: any, val: any, cb: any) => {
        const values: any = this.getValue()
        values[idx] = val;
        if (cb) {
           cb(values, idx);
        }
    }

    public render() {
        const {
            children,
            onChange,
            style,
            itemStyle,
            columnStyle,
            ...rest
        } = this.props;
        const value: any = this.getValue()
        const elements = React.Children.map(children, (col: any, idx) => {
            return React.cloneElement(col, {
                ...rest,
                selectedValue: value[idx],
                onValueChange: (val: any) => {
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
