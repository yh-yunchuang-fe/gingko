import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { GridProps, DataItem } from "./propsType";
import styles from './style/index'

const { width, height } = Dimensions.get('window');

export default class Grid extends React.Component<GridProps, any> {
    static defaultProps = {
        data: [],
        columnNum: 3,
        hasLine: true,
        noWrap: false,
        blankWidth: 0,
        itemStyle: {},
        onClick: ()=>{}
    };

    getFlexItemStyle () {
        const {columnNum = 3, blankWidth = 0} = this.props
        return {
            width: (width - blankWidth * 2) / columnNum,
            height: (width - blankWidth * 2) / columnNum
        }
    }

    renderItem(item, index) {
        const {renderItem } = this.props;
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

    render() {
        const { data, hasLine, onClick, itemStyle, noWrap, blankWidth = 0 } = this.props;

        const columnNum = this.props.columnNum || 0;
        const dataLength = data && data.length || 0;
        const rowCount = Math.ceil(dataLength/columnNum);
        const flexItemStyle = this.getFlexItemStyle();

        const rowsArr: any[] = [];
        for (let i = 0; i < rowCount; i++) {
            const arr: any[] = [];
            for (let j = 0; j < columnNum; j++) {
                const index = i * columnNum + j;

                if (index < dataLength) {
                    const item = data && data[index] || {};
                    arr.push(
                        <TouchableOpacity
                            key={j}
                            style={[
                                styles.gridItem,
                                { borderLeftWidth: hasLine && j !== 0 ? 1 : 0 },
                                flexItemStyle,
                                itemStyle
                            ]}
                            onPress={() => onClick && onClick(item, index)}>
                            { this.renderItem(item, index) }
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
                borderTopWidth: hasLine && noWrap && i === 0 ? 1 : 0,
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

}