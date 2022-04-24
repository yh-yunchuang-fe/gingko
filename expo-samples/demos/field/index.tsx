/*
 * @Author: wudi
 * @Date: 2022-04-14 15:28:26
 * @LastEditTime: 2022-04-22 14:28:01
 * @LastEditors: Please set LastEditors
 * @Description: Field Demo
 * @FilePath: /gingko/expo-samples/demos/field/index.tsx
 */
import { Text, ScrollView, StyleSheet } from 'react-native'
import { Field, WhiteSpace } from '../../../components'

export default () => {

    const onClick = (call = () => {}) => {
        call && call()
    }
    return <ScrollView>
        <Text style={styles.description}>输入框样式一（内容左对齐）</Text>
        <Field label={'标题文字'} value='' />
        <Field label={'标题文字'} value='输入文字左对齐' />
        <Field label={'标题文字'} value='必填项已输入的文字' />
        <Field label={'标题文字'} value='输入完成的文字超过一行末尾省略输入完成的文字超过一行末尾省略' />
        
        <Text style={styles.description}>输入框样式二（内容右对齐）</Text>
        <Field label={'标题文字'} value='' textAlign='right'/>
        <Field label={'标题文字'} value='输入文字右对齐' textAlign='right'/>

        <Text style={styles.description}>验证码</Text>
        <Field.verify label={'标题文字'} onClickVerify={onClick} />
        <Field.verify label={'标题文字'} value='601933' verifyTime={20}/>

        <Text style={styles.description}>备注或长文本</Text>
        <Field.textArea />
        <WhiteSpace/>
        <Field.textArea value='我是正文超过内容滑动展示，我是正文超过内容 ,滚动展示，我是正文超过内容滚动展示，我是正 ,文超过内容滚动展示，我是正文超过内容滚动展示' />
        <WhiteSpace/>
    </ScrollView>
}

const styles = StyleSheet.create({
    description: {
        fontSize: 12,
        lineHeight: 18,
        color: '#FF4E23',
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 16
    }
})
