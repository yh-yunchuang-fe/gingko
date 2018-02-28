/**
 * @author zhangyi
 */
import React  from 'react'
import {
    View,
    Text, ScrollView,
} from 'react-native'
import topView from 'rn-topview';
import Modal from './modal';
import variables from '../../src/style/variables';
import { IActionButton, IAlertProps } from './propsType';


class Alert extends React.Component<IAlertProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const { title, actions, content, onAnimationEnd } = this.props;
        const footer = actions.map((button) => {
            const originPress = button.onPress || function () {};
            button.onPress = () => {
                const res = originPress();
                if (res && (res as any).then) {
                    (res as any).then(() => {
                        this.onClose();
                    });
                } else {
                    this.onClose();
                }
            };
            return button;
        });

        return (
            <Modal
                transparent
                title={title}
                visible={this.state.visible}
                footer={footer}
                onAnimationEnd={onAnimationEnd}
            >
                {content ? <Text style={{
                    textAlign: 'center',
                    fontSize: variables.font_size_alert,
                    lineHeight: 21
                }}>{content}</Text> : null}
            </Modal>
        );
    }
}

export default function a(title: string, content: string, actions: IActionButton[] = [{ text: '确定' }]) {
    const onAnimationEnd = (visible) => {
        if (!visible) {
            topView.remove();
        }
    };

    topView.set(
        <Alert
            title={title}
            content={content}
            actions={actions}
            onAnimationEnd={onAnimationEnd}
        />,
    );
}
