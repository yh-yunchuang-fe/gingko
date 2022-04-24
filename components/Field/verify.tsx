/*
 * @Author: wudi
 * @Date: 2022-04-21 19:38:05
 * @LastEditTime: 2022-04-24 13:52:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Field/verify.tsx
 */
import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { IFieldProps } from './propsType'
import styles from './style'
import Field from './index'
import variables from '@src/style'

export default function Verify(props: IFieldProps) {
    const intervalRef = React.useRef<any>(null)

    const { 
        verifyStyle,
        verifyTimeStyle,
        verifyTextStyle,
        verifyTime = 59,
        onClickVerify
    } = props

    const [currenTime, setTime] = React.useState(verifyTime || 0)
    const [firstTime, setFirstSend] =  React.useState(true)

    React.useEffect(() => {
        intervalRef.current && clearInterval(intervalRef.current)
        return () => intervalRef.current && clearInterval(intervalRef.current)
    }, [])

    React.useEffect(() => {
        if (currenTime === verifyTime) {
            intervalRef.current = setInterval(() => setTime((time: number) => --time), 1000)
        } else if (currenTime === 0) {
            clearInterval(intervalRef.current)
        }
    }, [currenTime])

    // 获取验证码
    const getVerifyCode = () => {
        onClickVerify && onClickVerify(() => {
            setTime(verifyTime)
            setFirstSend(false)
        })
    }

    return <View style={styles.verifyContainer}>
        <Field {...props} />
        
        <TouchableOpacity
            onPress={ !currenTime ? getVerifyCode : () => {} }
            style={[styles.verifyTextWrapper, verifyStyle]}
            activeOpacity={!currenTime ? 0.2 : 1} >
            {
                currenTime ? <Text style={[styles.verifyTextWord, verifyTimeStyle]}>
                    {currenTime} S
                </Text> :
                <Text style={[styles.verifyTextWord, {
                    color: firstTime ? variables.color_field_verify_btnText_active : variables.color_field_verify_btnText_default
                }, verifyTextStyle]}>
                    {firstTime ? '发送验证码' : '重新发送'}
                </Text>
            }
        </TouchableOpacity>
    </View>
}
