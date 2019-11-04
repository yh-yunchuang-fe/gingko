/**
 * @author zhangyi
 * @date 2018/3/9
 */
export default interface TagProps {
    size?: 'default' | 'large' | 'small';
    closable?: boolean;
    readonly?: boolean;
    fill?: boolean;
    color?: string;
    textColor?: string;
    activeColor?: string;
    style?: any;
    textStyle?: any;
    selected?: boolean;
    onChange?: (_x: any) => void;
}
