import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import { IGridProps } from './propsType'
import styles from './style/index'

const { width } = Dimensions.get('window')

export default function Grid(props: IGridProps) {
    const {
        data = [],
        columnNum = 3,
        hasLine = true,
        noWrap = false,
        blankWidth = 0,
        itemStyle = {},
        onClick = () => {},
        buildItem
    } = props

    const getFlexItemStyle = () => {
        const {columnNum = 3, blankWidth = 0} = props
        return {
            width: (width - blankWidth * 2) / columnNum,
            height: (width - blankWidth * 2) / columnNum
        }
    }

    const renderItem = (item: any, index: number) => {
        const {renderItem } = props
        if (renderItem) {
            return renderItem(item, index)
        } else {
            const icon = React.isValidElement(item.icon) ?
                item.icon : (<Image source={{ uri: item.icon }} style={styles.icon} />);
            return (
                <View style={styles.gridItem}>
                    { icon }
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            )
        }
    }

    const columnNumber = columnNum || 0;
    const dataLength = data && data.length || 0;
    const rowCount = Math.ceil(dataLength/columnNumber);
    const flexItemStyle = getFlexItemStyle();

    const rowsArr: any[] = [];
    for (let i = 0; i < rowCount; i++) {
        const arr: any[] = [];
        for (let j = 0; j < columnNumber; j++) {
            const index = i * columnNumber + j;

            if (index < dataLength) {
                const item = data && data[index] || {};
                let paramItem = Object.assign({}, item)
                if (typeof buildItem === 'function') {
                    paramItem = buildItem(paramItem)
                }

                arr.push(
                    <TouchableOpacity
                        key={j}
                        style={[
                            styles.gridItem,
                            { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                            flexItemStyle,
                            itemStyle
                        ]}
                        onPress={() => onClick && onClick(paramItem, index)}>
                        { renderItem(item, index) }
                    </TouchableOpacity>
                )
            } else {
                arr.push(
                    <View key={j}
                            style={[
                                styles.gridItem,
                                { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                                flexItemStyle,
                                itemStyle
                            ]}
                    />
                )
            }
        }

        const boxBorderStyle = {
            borderTopWidth: hasLine && !noWrap && i === 0 ? 1 : 0,
            borderBottomWidth: hasLine ? (noWrap && i === rowCount - 1 ? 0 : 1) : 0,
        };
        rowsArr.push(
            <View key={i} style={[styles.gridRow, boxBorderStyle]}>
                {arr}
            </View>
        )
    }

    return (
        <View style={[styles.gridContainer, {paddingHorizontal: blankWidth}]}>
            { rowsArr }
        </View>
    )
}
