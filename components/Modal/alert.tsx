/**
 * @author zhangyi
 */
import React  from 'react'
import {
    Text,
} from 'react-native'
import rootView from 'react-native-root-view';
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
                const res:any = originPress();
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

type Reference = {
   id: number | null
};

const reference: Reference = {
    id: null
};

export default function a(title: string, content: string, actions: IActionButton[] = [{ text: '确定' }]) {
    const onAnimationEnd = (reference: any, visible: any) => {
        if (!visible) {
            rootView.remove(reference.id);
        }
    };

    reference.id = rootView.set(
        <Alert
            title={title}
            content={content}
            actions={actions}
            onAnimationEnd={onAnimationEnd.bind(null, reference)}
        />,
    );
}
