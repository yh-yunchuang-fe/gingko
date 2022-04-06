/*
 * @Author: wudi
 * @Date: 2022-04-01 10:25:14
 * @LastEditTime: 2022-04-02 11:49:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Switch/propsType.tsx
 */
export default interface ISwitchProps {
    value?: boolean
    size?: any
    width?: any
    height?: any
    color?: string
    bgColor?: string
    btnColor?: string
    sceneScale?: number
    useOnce?: any
    onPress?: (x?: any) => void
    onValueChange?: (x: any) => void
}
