import * as React from 'react'
import {
    Text
} from 'react-native'
import iconMap from './iconMap.json'
import SvgUri from '@utils/svgUri'
import svgs from '@src/assets/svgs'

export default class Icon extends React.Component {
    static defaultProps = {
        size: 16,
        color: '#212121',
    }

    render() {
        const { name, size, color, style, old } = this.props
        const sizeMap = { xxs: 12, xs: 14, sm: 16, md: 18, lg: 20 }
        let fontSize = typeof size === 'string' ? sizeMap[size] : size
        fontSize = fontSize || 16
        const lineHeight = fontSize + 1
        const TextIconStyle = {
            fontSize,
            lineHeight,
            color,
            fontFamily: 'gingkoIcon',
            flexDirection: 'row',
        }

        let svgXmlData = svgs[name]
        
        if (!old && !!svgXmlData) {
            return (
                <SvgUri
                    width={fontSize}
                    height={fontSize}
                    svgXmlData={svgXmlData}
                    fill={color}
                    style={style}
                />
            )
        } else {
            return <Text style={[TextIconStyle, style]}>{iconMap[name] || name}</Text>
        }
    }
}
