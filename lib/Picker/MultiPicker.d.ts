/**
 * Created by beilunyang on 2018/4/10
 */
import * as React from 'react';
export default class MultiPicker extends React.Component<any, any> {
    getValue: () => any[];
    onChange: (idx: any, val: any, cb: any) => void;
    render(): JSX.Element;
}
