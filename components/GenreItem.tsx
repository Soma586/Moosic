import {View, Image, StyleSheet} from 'react-native'
import { MontSerratMediumText } from './StyledText'


const GenreItem = () => {



    return (

        <View style={[styles.genreContainer, {backgroundColor : 'red'}]}>

            <MontSerratMediumText style={styles.text}>bankai</MontSerratMediumText>


            <Image
            style={styles.image}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />


        </View>
    )

}


const styles = StyleSheet.create({

    genreContainer : {
        width : 200 ,
        height : 67,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderRadius : 10,
    },
    image : {
        height : '100%',
        width : 66,
        borderRadius : 4,
        position : 'absolute',
        right : 0

    },
    text : {
        position : 'absolute',
        top : 10,
        left : 5,
        fontSize : 15
    }
})


export default GenreItem