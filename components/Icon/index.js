import * as React from 'react'
import {
    Text
} from 'react-native'
import iconMap from './iconMap.json'
import SvgUri from '@utils/svgUri'
import svgs from '@src/assets/svgs'

export default function Icon(props) {
    const {
        name, 
        size = 16,
        style = {}, 
        ...restProps
    } = props

    let svgXmlData = svgs[name]
    
    if (!!svgXmlData) {
        const fill = !props.color ? {} : {fill: props.color}
        return (
            <SvgUri
                width={size}
                height={size}
                svgXmlData={svgXmlData}
                style={style}
                {...fill}
                {...restProps}
            />
        )
    } else {
        const sizeMap = { xxs: 12, xs: 14, sm: 16, md: 18, lg: 20 }
        let fontSize = typeof size === 'string' ? sizeMap[size] : size
        fontSize = fontSize || 16
        const lineHeight = fontSize + 1
        const fill = !props.color ? {} : { color: props.color }
        
        const TextIconStyle = {
            fontSize,
            lineHeight,
            ...fill,
            fontFamily: 'gingkoIcon',
            flexDirection: 'row',
        }

        return <Text style={[TextIconStyle, style]}>{iconMap[name] || name}</Text>
    }
}
