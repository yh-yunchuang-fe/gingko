import {
    Dimensions,
    Platform
} from 'react-native'

export const deviceWidth = Dimensions.get('window').width      //设备的宽度
export const deviceHeight = Dimensions.get('window').height    //设备的高度

export const designWidth = 375
export const designHeight = 667

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isIphoneX = isIOS && (Number((String(deviceHeight/deviceWidth)).substr(0,4)) * 100) === 216

export function getWidth(width) {
    if (typeof width === 'number') {
        return Math.round(width * deviceWidth / designWidth)
    }
}

export function getHeight(height) {
    if (typeof height === 'number') {
        return Math.round(height * deviceHeight / designHeight)
    }
}

export function getFontSize(fontSize) {
    if (typeof fontSize === 'number') {
        let scale = Math.min(deviceWidth / designWidth, deviceHeight / designHeight)
        return fontSize * scale
    }
}

//状态栏高度
export function getStatusBarHeight() {
    return isIphoneX() ? 44 : 20
}