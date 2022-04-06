import React from 'react'
import SvgUri from '../../src/react-native-svg-uri/index'
import svgs from '../../src/assets/svgs'

export interface ISVGProps {
    icon: string,
    color?: string | number,
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number | string
    style?: any
}

export default class Svg extends React.Component<ISVGProps, any> {
    public render() {
        const {
            icon,
            color,
            size,
            style,
        } = this.props

        const svgXmlData = svgs[icon]

        if (!svgXmlData) {
            const errMsg = `没有"${icon}"这个icon，请下载最新的icomoo并 npm run build-js`
            throw new Error(errMsg)
        }
        
        return (
            <SvgUri
                width={size}
                height={size}
                svgXmlData={svgXmlData}
                fill={color}
                style={style}
            />
        )
    }
}
