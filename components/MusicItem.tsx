import {View, Image, StyleSheet} from 'react-native'
import { MontSerratMediumText } from './StyledText'




interface itemProps {
    title : string
}

const MusicItem = ({title} : itemProps) => {




    return ( 
        <View>
            <Image
            source= {{uri : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'}}
            style={styles.image}
            />

            <MontSerratMediumText>{title}</MontSerratMediumText>


        </View>
    )
}


const styles = StyleSheet.create({
    image : {
        width : 129,
        height : 129,
        borderRadius : 10,
        marginBottom : 10,
        marginRight : 24
    }

})


export default MusicItem