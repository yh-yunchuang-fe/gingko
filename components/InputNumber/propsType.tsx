/**
 * @author zhangyi
 * @date 2018/3/24
 */

export default interface InputNumberProps {
    value?: number;
    max?: number;
    min?: number;
    step?: number;           //每次改变的步伐，可以是小数
    size?: 'default';        // large small TODO
    disabled?: boolean;      // TODO need UI
    editable?: boolean;      // TODO 只能点加减 不能直接修改
    autoFocus?: boolean;
    unit?: string;
    onChange?: (_x: any)=>void;
    onFocus?: ()=>void;
    onBlur?: ()=>void;

    style?: any;
    width?: string | number;
};