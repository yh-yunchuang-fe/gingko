/**
 * @author zhangyi
 */
import variables from '@src/style'
import React from 'react'
import { Text } from 'react-native'
import RootView from 'react-native-root-view'
import Modal from './index'
import { IActionButton, IAlertProps } from './propsType'

const Alert = (props: IAlertProps) => {
    const [visible, setVisible] = React.useState(true)

    const onClose = () => {
        setVisible(false)
    }

    const { title, actions, content, onAnimationEnd } = props
    const footer = actions.map((button: any) => {
        const originPress = button.onPress || (() => {})
        button.onPress = () => {
            const res: any = originPress()
            if (res && (res as any).then) {
                (res as any).then(() => {
                    onClose()
                })
            } else {
                onClose()
            }
        }
        return button
    })

    return <Modal
        transparent
        title={title}
        visible={visible}
        footer={footer}
        onAnimationEnd={onAnimationEnd}
    >
        {content ? <Text style={{
            textAlign: 'center',
            fontSize: variables.font_alert_description_size,
            lineHeight: variables.font_alert_description_lineheight
        }}>{content}</Text> : null}
    </Modal>

}

type Reference = {
    id: number | null
}

const reference: Reference = {
    id: null
}

export default function alert(title: string, content: string, actions: IActionButton[] = [{ text: '确定' }]) {
    const onAnimationEnd = (data: { id: any }, visible: any) => {
        !visible && RootView.remove(data.id)
    }

    reference.id = RootView.set(
        <Alert
            title={title}
            content={content}
            actions={actions}
            onAnimationEnd={onAnimationEnd.bind(null, reference)}
        />,
    )
}
