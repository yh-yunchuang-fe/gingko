/*
 * @Author: wudi
 * @Date: 2022-03-31 17:17:30
 * @LastEditTime: 2022-04-02 13:47:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/components/Switch/index.tsx
 */
import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import ISwitchProps from './propsType'

class Switch extends React.Component<ISwitchProps, any> {
    public static defaultProps = {
        value: '',
        width: 48,
        height: 28,
        size: 18,
        color: '#FE8F1D',
        bgColor: '#C4C4C4',
        btnColor: '#FFFFFF',
        onValueChange: () => {}
    }

    public toggerPostion: Animated.Value
    public scaleBg: Animated.Value
    public sceneScale: number = 1
    public toggleTop: number

    constructor(props: any) {
        super(props)
        this.state = {
            toggleOn: false
        }
        this.toggerPostion = new Animated.Value(1)
        this.scaleBg = new Animated.Value(1)
        this.toggleTop = (props.height - props.size) / 2
    }
  
    public componentDidMount() {
        const { value } = this.props
        console.log('componentDidMount====', value)
        if(value) {
            this.setState({toggleOn:true})
            this.toggleOn()
        } else {
            this.toggleOff()
        }
    }
  
    public toggleSwitch = ()=> {
        const { onPress, useOnce, onValueChange } = this.props
        
        if(this.state.toggleOn && useOnce === undefined) {
            console.log('toggleSwitch====true')
            this.setState({
                toggleOn: false
            })
            this.toggleOff()

            onValueChange && onValueChange(false)
        } else {
            console.log('toggleSwitch====false')
            this.setState({
                toggleOn: true
            })
            this.toggleOn()
    
            if(onPress) {
                setTimeout(()=> {onPress()},400)
            }
            onValueChange && onValueChange(true)
        }
    }

    public toggleOn = () => {
        const { width, height } = this.props
        Animated.spring(this.toggerPostion, {
            toValue: this.sceneScale * (48 - 23),
            useNativeDriver: false
        }).start()
        Animated.timing(this.scaleBg,{
            toValue: 0, duration: 400,
            useNativeDriver: false
        }).start()
    }

    public toggleOff = () => {
        Animated.spring(this.toggerPostion,{
            toValue: this.toggleTop,
            useNativeDriver: false
        },).start()
        Animated.timing(this.scaleBg,{
            toValue: 1, duration: 400,
            useNativeDriver: false
        }).start()
    }
  
    // public componentWillReceiveProps(nextProps) {
    //     console.log('this.props.value !== nextProps.value===', this.props.value !== nextProps.value)
    //     if(this.props.value !== nextProps.value) {
    //         this.toggleSwitch()
    //     }
    // }
  
    public render() {
        const { 
            size, 
            width, 
            height,
            color,
            bgColor,
            btnColor
         } = this.props

        const scaleRadius = height / 2
        const toggleRadius = size / 2
  
        return (
            <TouchableOpacity style={{
                width, 
                height,
                borderRadius: scaleRadius,
                backgroundColor: color
            }} onPress={this.toggleSwitch} activeOpacity={1}>
                <Animated.View style={{ 
                    flex: 1,
                    borderRadius: scaleRadius,
                    backgroundColor: bgColor,
                    transform:[{scale:this.scaleBg}]
                }}></Animated.View>

                <Animated.View style={{ 
                    position:'absolute',
                    width: size, 
                    height: size,
                    borderRadius: toggleRadius,
                    top: this.toggleTop,
                    backgroundColor: btnColor,
                    left: this.toggerPostion
                }}></Animated.View>
            </TouchableOpacity>
        )
    }
}
  
export default Switch
