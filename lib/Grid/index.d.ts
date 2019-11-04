import React from 'react';
import { GridProps } from "./propsType";
export default class Grid extends React.Component<GridProps, any> {
    static defaultProps: {
        data: never[];
        columnNum: number;
        hasLine: boolean;
        noWrap: boolean;
        blankWidth: number;
        itemStyle: {};
        onClick: () => void;
    };
    getFlexItemStyle(): {
        width: number;
        height: number;
    };
    renderItem(item: any, index: any): React.ReactElement<any>;
    render(): JSX.Element;
}
