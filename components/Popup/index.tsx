/**
 * @author zhangyi
 * @date 2018/2/28
 */
import React  from 'react'
import Dialog from '../Dialog'
import IPopupProps from './propsType';
import styles from './style'

export default class Popup extends React.Component<IPopupProps, any> {
    constructor(props: any) {
        super(props)
    }

    static defaultProps = {
        visible: false,
        animateAppear: true,
        animationDuration: 300,
        maskClosable: true,
        onClose: () => { },
        onAnimationEnd: () => { },
        style: {},
    };

    render() {
        const {
            visible, maskClosable, animateAppear, onAnimationEnd, onClose, style,
            children, animationDuration
        } = this.props;

        return (
            <Dialog
                transparent
                visible={visible}
                animationType="slide-up"
                animateAppear={animateAppear}
                animationDuration={animationDuration}
                onClose={onClose}
                maskClosable={maskClosable}
                onAnimationEnd={onAnimationEnd}
                style={[style, styles.container]}
            >
                { children }
            </Dialog>

        )
    }

}