/*
 * @Author: wudi
 * @Date: 2022-04-24 13:57:40
 * @LastEditTime: 2022-04-24 17:16:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/TabBar/index.tsx
 */
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import { ITabBarProps, ITabBarItemProps } from './propsType'
import Icon from '../Icon'
import Badge from '../Badge'
import GingkoImage from '../GingkoImage'

const TabBar = (props: ITabBarProps) => {
    const {
        filter = 0,
        iconStyle = {},
        onClick = () => {},
        tabTextStyle = {},
        selectionColor = '#FE8F1D',
        tabs = [
            {
                title: '待取货',
                badge: true,
                image: <Icon name='icon-pick-up' size={24} />,
                activeImage: <Icon name='icon-pick-up-checked' size={24} color={selectionColor} />
            },
            {
                title: '待送达',
                badge: 10,
                image: <Icon name='icon-staff' size={24} />,
                activeImage: <Icon name='icon-staff-checked' size={24} color={selectionColor} />
            }
        ]
    } = props

    const [currentIndex, setCurrentIndex] = React.useState(filter)

    const onPress = (item: any, index: number) => {
        if (!item.title) {
            return null
        }
        
        setCurrentIndex(index)
        onClick && onClick(index)
    }

    const renderItem = () => {
        return tabs.map((item: ITabBarItemProps, index: number) => {
            if (!!item.hide) {
                return null
            }
            const textStyle = currentIndex === index ? styles.selectedText : {}
            const image = currentIndex === index ? item.activeImage : item.image

            let ImgDom: any = null
            if (image){
                if (React.isValidElement(image)) {
                    ImgDom = image
                } else {
                    ImgDom = <GingkoImage style={[styles.footerImage, iconStyle]} source={image}/>
                }
            }

            const badgeSty = (typeof item.badge === 'boolean' && !!item.badge ) ? {
                dot: true
            } : (item.badge > 0) ? {
                text: item.badge
            } : {}

            return <TouchableOpacity
                style={[styles.footerTab, tabTextStyle]}
                key={`${item.title}_${index}`}
                onPress={() => {onPress(item, index)}}>
                <Badge {...badgeSty}>{ImgDom}</Badge>
                <Text style={[styles.unselectText, textStyle]}>{item.title}</Text>
            </TouchableOpacity>
        })
    }

    return (
        <View style={styles.footerContainer}>
            { renderItem() }
        </View>
    )
}

export default TabBar
