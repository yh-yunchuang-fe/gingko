import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {
    Icon,
    Card,
    WingBlank,
    WhiteSpace,
} from '../../../components/index'

export default () => {
    return <View>
        <WingBlank>
            <WhiteSpace size='lg'/>
            <Card>
                <Card.Header>这是标题</Card.Header>
                <Card.Body>
                    <Text>content content</Text>
                </Card.Body>
                <Card.Footer>footer</Card.Footer>
            </Card>
            <WhiteSpace size='lg'/>
            <Card>
                <Card.Body>
                    <View>
                        <Icon name='camera' size={30} />
                        <Icon name='scan' size={30} />
                        <Text>This is content</Text>
                    </View>
                </Card.Body>
            </Card>
            <WhiteSpace size='lg'/>
        </WingBlank>

        <Card full>
            <Card.Header>
                通栏卡片
            </Card.Header>
            <Card.Body>
                <Text>content content</Text>
                <WhiteSpace/>
                <Text>content content</Text>
                <WhiteSpace/>
                <Text>content content</Text>
            </Card.Body>
            <Card.Footer style={styles.cardFooter}>
                <TouchableOpacity style={styles.cardFooterWrap}>
                    <Text style={styles.cardFooterText}>
                        展开明细
                    </Text>
                    <Icon name='chevron-down' color='#FE8F1D' size='xxs'/>
                </TouchableOpacity>
            </Card.Footer>
        </Card>
    </View>
}

const styles = StyleSheet.create({
    cardFooter: {
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    cardFooterWrap: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fafafa',
    },
    cardFooterText: {
        color: '#FE8F1D',
        fontSize: 14,
        marginRight: 5
    }
})
