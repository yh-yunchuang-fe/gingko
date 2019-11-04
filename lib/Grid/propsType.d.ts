import React from 'react';
export interface DataItem {
    icon?: any;
    text?: any;
    [key: string]: any;
}
export interface GridProps {
    data?: Array<DataItem | undefined>;
    columnNum?: number;
    hasLine?: boolean;
    itemStyle?: any;
    noWrap?: boolean;
    blankWidth?: number;
    onClick?: (dataItem: DataItem | undefined, itemIndex: number) => void;
    renderItem?: (dataItem: DataItem | undefined, itemIndex: number) => React.ReactElement<any>;
}
