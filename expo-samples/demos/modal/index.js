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
   state = {
       modalVisible: false,
   };

   openModal = () => {
       this.setState({
           modalVisible: true,
       });
   }

   closeModal = () => {
       this.setState({
           modalVisible: false,
       });
   }

   openAlert = () => {
      Modal.alert('是否确定\n离开当前页面？', '所填内容将丢失', [{
          text: '取消',
          type: 'default',
          onPress: () => {
              console.log('取消');
          },
      }, {
          text: '离开',
          type: 'primary',
          onPress: () => {
            console.log('离开');
          },
      }]);
   }

   render() {
       return (
           <View>
               <Modal
                   title="我是普通Modal"
                   animationType="slide-down"
                   visible={this.state.modalVisible}
                   footer={[{
                       text: '取消',
                   }, {
                       text: '确定',
                   }]}
                   maskClosable
                   onClose={this.closeModal}
               >
                   <Text>我是content</Text>
               </Modal>
               <Button onClick={this.openModal}>打开Modal</Button>
               <WhiteSpace />
               <Button onClick={this.openAlert}>打开Alert</Button>
           </View>
       );
   }
}

