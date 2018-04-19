/**
 * Created by beilunyang on 2018/3/14
 */
import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from '../Icon';
import styles from './style';
import variables from '../../src/style/variables';
import { ICheckbox } from './propsType';

export default class Checkbox extends React.Component<ICheckbox, any> {
    static defaultProps = {
        icon: true,
        dir: 'left',
        defaultChecked: false,
        onChange() {},
        style: {},
        textStyle: {},
        disabled: false,
    };

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.checked === 'boolean') {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }

    constructor(props) {
        super(props);
        const { checked, defaultChecked } = this.props;
        let initChecked: boolean = false;
        if (typeof checked === 'boolean') {
            initChecked = checked;
        } else {
            initChecked = defaultChecked!;
        }

        this.state = {
            checked: initChecked,
        };
    }

    handleClick = () => {
        const checked = !this.state.checked;
        if (!(typeof this.props.checked === 'boolean')) {
            this.setState({
                checked,
            });
        }
        if (this.props.onChange) {
            this.props.onChange(checked);
        }
    };

    renderIcon() {
        const { icon } = this.props;

        if (typeof icon === 'function') {
            const elements = icon({ checked: this.state.checked });
            if (React.isValidElement(elements)) {
                return elements;
            }
        }

        if (typeof icon === 'boolean' && icon) {
            const defaultIcon = (checked) => {
                const icon = checked ? 'checked' : 'radio-off';
                return (
                    <View style={styles.icon}>
                        <Icon name={icon} color={variables.color_link} />
                    </View>
                );
            };
            return defaultIcon(this.state.checked);
        }

        return null;
    }

    render() {
        const {
            icon,
            onChange,
            defaultChecked,
            checked,
            dir,
            style,
            textStyle,
            disabled,
            children,
            ...restProps,
        } = this.props;
        let elements: any = null;
        if (React.isValidElement(children)) {
            elements = children;
        }

        if (typeof children === 'string') {
            elements = <Text style={textStyle}>{children}</Text>
        }

        return (
            <TouchableOpacity
                {...restProps}
                onPress={this.handleClick}
                disabled={disabled}
            >
                <View style={[styles.container, style]}>
                    {dir === 'left' ? this.renderIcon() : null}
                    {elements}
                    {dir === 'right' ? this.renderIcon() : null}
                </View>
            </TouchableOpacity>
        );
    }
}
