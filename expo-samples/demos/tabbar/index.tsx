import { View } from 'react-native'
import {
    Icon,
    TabBar,
    WhiteSpace
} from '../../../components'

export default () => {
    return <View>
        <TabBar />
        <WhiteSpace />
        <TabBar tabs={[
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '',
                badge: false,
                image: null,
                activeImage: null
            },
            {
                title: '待送达',
                badge: true,
                image: <Icon size={24} name='icon-staff' />,
                activeImage: <Icon size={24} name='icon-staff-checked' color={'#FE8F1D'} />
            }
        ]}/>
        <WhiteSpace />
        <TabBar tabs={[
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
        ]}/>
        <WhiteSpace />
        <TabBar tabs={[
            { title: '待取货' },
            { title: '待取货' },
            { title: '待取货' },
            { title: '待取货' },
        ]}/>
        <WhiteSpace />
        <TabBar tabs={[
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: false,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
            {
                title: '待取货',
                badge: 1000,
                image: <Icon size={24} name='icon-pick-up' />,
                activeImage: <Icon size={24} name='icon-pick-up-checked' color={'#FE8F1D'} />
            },
        ]}/>
    </View>
}