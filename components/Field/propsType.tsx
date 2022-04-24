export interface IFieldProps {
    labelSty?: object
    valueSty?: object
    labelWarpSty?: object
    valueWarpSty?: object
    inputSty?: object
    label?: string
    value?: any
    rightView?: any
    autoFocus?: boolean
    textAlign?: any
    selectionColor?: string
    placeholderTextColor?: string
    placeholder?: string
    onSubmit?: (x?: any) => void
    onChange?: (x?: any) => void
    onFocus?: (x?: any) => void
    onBlur?: (x?: any) => void
    onClear?: (x?: any) => void
    onChangeText?: (x?: any) => void
    verifyStyle?: object
    verifyTimeStyle?: object
    verifyTextStyle?: object
    verifyTime?: number
    onClickVerify?: (x?: any) => void
}
