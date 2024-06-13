import {View, ImageBackground, StyleSheet } from 'react-native'
import { MontSerratBoldText, MontSerratMediumText } from './StyledText'

const CategoryItem = ({quantity = 400, label}) => {




    return (
        <View style={styles.categoryContainer}>

            <ImageBackground
            source={{uri : 'https://legacy.reactjs.org/logo-og.png'}}
            style={styles.imgBackground}

            >
                <View style={{alignItems : 'center',  backgroundColor: '#000000c0',}}>
                    <MontSerratBoldText style={{fontSize : 18, marginBottom : 10}}>{label}</MontSerratBoldText>
                    <MontSerratMediumText style={{fontSize : 14}}> {quantity} tracks</MontSerratMediumText>
                </View>
                
            </ImageBackground>
        </View>
    )

}


const styles =  StyleSheet.create({

    categoryContainer : {
        height : 168,
        width : 168,
        borderRadius : 10
    },
    imgBackground : {
        flex :1,
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 10,
		overflow: 'hidden'
    }
})

export default CategoryItem