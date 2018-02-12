/**
 * Created by beilunyang on 2018/2/23
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Button from '../../../components/Button/index';
import WhiteSpace from "../../../components/WhiteSpace/index";
import Modal from '../../../components/Modal/index';

export default class extends Component {

   openAlert = () => {
      Modal.alert('是否确定离开当前页面？', '所填内容将丢失', [{
          title: '取消',
      }, {
          title: '离开',
          onPress: () => {
            console.log('离开');
          },
      }]);
   }

   render() {
       return (
           <View>
               <Button onClick={() => {}}>打开Modal</Button>
               <WhiteSpace />
               <Button onClick={this.openAlert}>打开Alert</Button>
           </View>
       );
   }
}

