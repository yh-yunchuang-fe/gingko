/**
 * @author zhangyi
 * @date 2018/3/9
 */

export default interface TagProps {
    // 可以考虑以后做成可点击的

    size?: 'default' | 'large' | 'small'; // TODO 暂不支持
    type?: 'default' | 'orange' | 'blue' | 'green' | 'red'
    closable?: boolean;

    readonly?: boolean;
    fill?: boolean;
    color?: string;
    textColor?: string;
    activeColor?: string;
    style?: any;
    textStyle?: any;

    children?: any
    selected?: boolean;
    onChange?: (x: any) => void;
}
