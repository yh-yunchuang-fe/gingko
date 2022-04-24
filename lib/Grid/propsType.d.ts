import React from 'react';
export interface IDataItem {
    icon?: any;
    text?: any;
    [key: string]: any;
}
export interface IGridProps {
    data?: Array<IDataItem | undefined>;
    columnNum?: number;
    hasLine?: boolean;
    itemStyle?: any;
    noWrap?: boolean;
    blankWidth?: number;
    onClick?: (dataItem: IDataItem | undefined, itemIndex: number) => void;
    renderItem?: (dataItem: IDataItem | undefined, itemIndex: number) => React.ReactElement<any>;
    buildItem?: (dataItem: IDataItem | undefined) => any;
}
