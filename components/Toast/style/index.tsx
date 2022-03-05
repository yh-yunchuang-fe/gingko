/*
 * @Author: your name
 * @Date: 2021-09-01 17:56:38
 * @LastEditTime: 2022-03-02 18:13:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Toast/style/index.tsx
 */
/**
 * Created by beilunyang on 2018/3/27
 */
import {
    StyleSheet,
    Platform,
} from 'react-native';
import variables from '../../../src/style/variables';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS ? 64 : 54,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: variables.toast_zIndex,
    },
    innerContainer: {
        backgroundColor: 'rgba(0, 0, 0, .8)',
        borderRadius: variables.radius,
        paddingHorizontal: 10,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 90,
    },
    iconContainer: {
        paddingTop: 10,
        paddingBottom: 8,
    },
    textContainer: {
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
    },
});