/**
 * Created by beilunyang on 2018/3/2
 *
 * modify from https://github.com/react-component/m-picker/blob/master/src/PickerMixin.tsx
 */
import React from 'react';
import { IAndroidPickerProps } from './propsType';

export default function(ComposedComponent) {
    return class extends React.Component<IAndroidPickerProps, any> {
        select = (value, itemHeight, scrollTo) => {
            const children: any = React.Children.toArray(this.props.children);
            for (let i = 0, len = children.length; i < len; i++) {
                if (children[i].props.value === value) {
                    this.selectByIndex(i, itemHeight, scrollTo);
                    return;
                }
            }
            this.selectByIndex(0, itemHeight, scrollTo);
        }

        selectByIndex(index, itemHeight, zscrollTo) {
            if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
                return;
            }
            zscrollTo(index * itemHeight);
        }

        computeChildIndex(top, itemHeight, childrenLength) {
            let index = top / itemHeight;
            const floor = Math.floor(index);
            if (index - floor > 0.5) {
                index = floor + 1;
            } else {
                index = floor;
            }
            return Math.min(index, childrenLength - 1);
        }

        doScrollingComplete = (top, itemHeight, fireValueChange) => {
            const children = React.Children.toArray(this.props.children);
            const index = this.computeChildIndex(top, itemHeight, children.length);
            const child: any = children[index];
            if (child) {
                fireValueChange(child.props.value);
            } else if (console.warn) {
                console.warn('child not found', children, index);
            }
        }

        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    doScrollingComplete={this.doScrollingComplete}
                    computeChildIndex={this.computeChildIndex}
                    select={this.select}
                />
            );
        }
    };
}
