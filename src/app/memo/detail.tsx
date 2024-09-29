import { View, Text, ScrollView, StyleSheet} from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = () =>{
    return(
        <View style={style.container}>
            <Header />
            <View style = {style.memoHeader}>
                <Text style = {style.memoTitle}>買い物リスト</Text>
                <Text style = {style.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={style.memoBody}>
                <Text style={style.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton style={{ top:160, bottom:'auto'}}>＋</CircleButton>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal:27
    },
    memoBodyText:{
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail
