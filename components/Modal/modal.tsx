/**
 * Created by beilunyang on 2018/2/23
 */
import * as React from 'react';
import {
    View,
    Modal,
} from 'react-native';
import styles from './style/index';
import Button from '../../components/Button';
import {IActionButton, IModalProps} from './propsType';

export default class YHModal extends React.Component<IModalProps, any> {
    static defaultProps = {
        title: '',
        visible: false,
        onClose: () => {},
        onShow: () => {},
        closable: false,
        maskClosable: false,
        animationType: 'fade',
        onAnimationEnd: () => {},
        footer: [],
        style: {},
    };

    static alert: any;

    render() {
        const { children, visible, animationType, onShow, onClose, style, footer } = this.props;
        if (Array.isArray(footer)) {
            if (footer.length === 1) {
                // TODO:
                const { text, type } = footer[0] as IActionButton;
                return (
                    <Button type={type}>{text}</Button>
                );
            }

            if (footer.length === 2) {
                return footer.map((button, idx) => {
                    const { text, type }: IActionButton = button as IActionButton;
                    return (
                        <Button type={type}></Button>
                    );
                });
            }

            if (footer.length > 2) {
                console.warn('最多只能有两个按钮');
                return;
            }
            const footerButtons = footer.map((button: any, idx) => {
                return (
                    <Button type="primary">{button.title}</Button>
                );
            });
        }
        return (
            <View style={styles.container}>
                <Modal
                    visible={visible}
                    animationType={animationType}
                    onShow={onShow}
                    onRequestClose={onClose}
                    transparent
                >
                    <View style={style}>
                        {children}
                    </View>
                </Modal>
            </View>
        );
    }
}