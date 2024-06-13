import {View, Image, StyleSheet} from 'react-native'
import { MontSerratMediumText } from './StyledText'

const ArtistItem = ({title}) => {




    return (

        <View style={styles.ArtistContainer}>
            <Image
            style={styles.images}
            source={{ uri : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'}}
            />

        <MontSerratMediumText style={{ fontSize : 13}}>{title}</MontSerratMediumText>

        </View>
    )


}


const styles = StyleSheet.create({


    images : {
        width : 100,
        height : 100,
        borderRadius : 100,
        marginBottom : 14
    },
    ArtistContainer : {
        alignItems : 'center',
        marginRight : 20
    }
})


export default ArtistItem