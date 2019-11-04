/**
 * @author zhangyi
 * @date 2018/3/20
 */
export default interface RadioGroupProps {
    style: any;
    mode: 'button' | 'radio';
    radios: Array<any>;
    defaultIndex?: number;
    index?: number;
    onChange?: (index: number, x: any) => void;
}
