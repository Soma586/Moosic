import {View, Image, StyleSheet} from 'react-native'
import { MontSerratText, MontSerratMediumText } from './StyledText'
import { FontAwesome, Entypo } from '@expo/vector-icons'



const DiscoverItem = () => {





    return (
        <View style={styles.discoverContainer}>


            <Image
            style={styles.imageContainer}
            source={{uri: 'https://legacy.reactjs.org/logo-og.png'}}

            />

            <View style={{flex : 1, paddingLeft : 14}}>
            <View style={{ flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>

                <View>
                <MontSerratMediumText style={{fontSize : 15}}>album song</MontSerratMediumText>
                <MontSerratText style={{fontSize : 13 , color :'#A7A7A7'}}>pokemoon</MontSerratText>

                </View>

                <View style={{flexDirection : 'row'}}>

                    <FontAwesome name='play' color={'#A7A7A7'} size={20}/>

                    <Entypo name='dots-three-vertical' color={'#A7A7A7'} size={20}/>

                </View>
                
            </View>
            </View>

        </View>
    )


}


const styles = StyleSheet.create({
    imageContainer : {
        width : 50,
        height : 50
    },
    discoverContainer : {
       // width : '100%',
        flexDirection : 'row',
        //justifyContent : 'space-between'
        alignItems : 'center'
    }

})


export default DiscoverItem