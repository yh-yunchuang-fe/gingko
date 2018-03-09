/**
 * Created by beilunyang on 2018/3/7
 */
import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Badge, WhiteSpace } from '../../../components';

export default class extends Component {
    render() {
        return (
            <View style={{padding: 20}}>
                <Badge dot>
                    <Text>有图片</Text>
                </Badge>
                <WhiteSpace />
                <Badge text={3}>
                    <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
                </Badge>
                <WhiteSpace />
                <Badge text={30} overflowCount={10} style={{marginTop: 20}}>
                    <View style={{width: 50, height: 50, backgroundColor: '#666'}}/>
                </Badge>
                {/*<Badge text="配送" />*/}
                {/*<WhiteSpace />*/}
                {/*<Badge color="#ccc" bgColor="red" text="堂食" />*/}
                {/*<WhiteSpace />*/}
                {/*<Badge textStyle={{ fontSize: 18, lineHeight: 18 }} text="活动" style={{ borderRadius: 10 }}/>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge*/}
                    {/*text="抢购"*/}
                    {/*textStyle={{ backgroundColor: 'transparent', color: 'red' }}*/}
                    {/*style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'red' }}*/}
                {/*/>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge*/}
                    {/*text="限时"*/}
                    {/*style={{ marginLeft: 20 }}*/}
                {/*>*/}
                    {/*<Text>content text</Text>*/}
                {/*</Badge>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge text={30} overflowCount={25}>*/}
                    {/*<Text>数字+</Text>*/}
                {/*</Badge>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge*/}
                    {/*text={18}*/}
                    {/*overflowCount={10}*/}
                    {/*style={{*/}
                        {/*borderRadius: 20,*/}
                        {/*position: 'absolute',*/}
                        {/*right: 0,*/}
                        {/*top: 0,*/}
                    {/*}}*/}
                {/*>*/}
                    {/*<View style={{*/}
                        {/*height: 40,*/}
                        {/*width: 200,*/}
                        {/*backgroundColor: '#fff',*/}
                        {/*paddingHorizontal: 20,*/}
                        {/*marginTop: 5,*/}
                        {/*marginRight: 10,*/}
                    {/*}}>*/}
                        {/*<Text>仙贝tomato</Text>*/}
                    {/*</View>*/}
                {/*</Badge>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge text="促" corner>*/}
                    {/*<View style={{ backgroundColor: '#f2f2f2', width: 100, height: 50, justifyContent: 'center' }}>*/}
                        {/*<Text style={{ color: '#000', fontSize: 14 }}>corner badge</Text>*/}
                    {/*</View>*/}
                {/*</Badge>*/}
                {/*<WhiteSpace />*/}
                {/*<Badge*/}
                    {/*text="神"*/}
                    {/*corner*/}
                    {/*style={{*/}
                       {/*top: 4,*/}
                       {/*right: -28,*/}
                    {/*}}*/}
                    {/*textStyle={{*/}
                        {/*fontSize: 10,*/}
                        {/*backgroundColor: 'red',*/}
                    {/*}}*/}
                {/*>*/}
                    {/*<View style={{ backgroundColor: '#f2f2f2', width: 150, height: 30, justifyContent: 'center' }}>*/}
                        {/*<Text style={{ color: '#000', fontSize: 14 }}>custom corner badge position</Text>*/}
                    {/*</View>*/}
                {/*</Badge>*/}
            </View>
        );
    }
}
