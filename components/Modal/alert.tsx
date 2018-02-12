/**
 * Created by beilunyang on 2018/2/23
 */
import * as React from 'react';
import {
    Text,
} from 'react-native';
import topView from 'rn-topview';
import Modal from './modal';
import { IActionButton, IAlertProps } from './propsType';



class Alert extends React.Component<IAlertProps, any> {
    state = {
        visible: true,
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { title, content, onAnimationEnd, actions } = this.props;
        const footer = actions.map((action) => {
            const originPress = action.onPress || function () {};
            action.onPress = () => {
                const res = originPress();
                if (res && (res as any).then) {
                    (res as any).then(() => this.onClose());
                } else {
                    this.onClose();
                }
            };
            return action;
        });

        return (
            <Modal
                title={title}
                visible={this.state.visible}
                footer={footer}
                onAnimationEnd={onAnimationEnd}
            >
                <Text>{content}</Text>
            </Modal>
        );
    }
}

export default (title: string, content: string, actions: IActionButton[] = [{ text: '确定' }]) => {
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
       />
   );
};

