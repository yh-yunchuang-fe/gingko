/**
 * @author zhangyi
 * @date 2018/3/9
 */

export default interface TagProps {
    // 可以考虑以后做成可点击的
    readonly?: boolean; //TODO 暂不支持
    size?: 'default' | 'large' | 'small'; //TODO 暂不支持
    closable?: boolean;

    fill?: boolean;
    color?: string;
}