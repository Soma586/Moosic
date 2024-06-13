//import { View } from "./Themed"
import {View, FlatList} from 'react-native'
import { MontSerratSemiBoldText } from './StyledText'


const Scroller = ({title = "Recently Played", list, Component}) => {



    return (
        <View>
            <MontSerratSemiBoldText style={{fontSize : 18, marginBottom : 18}}>{title}</MontSerratSemiBoldText>

            <FlatList
            //data
            data={list}
            renderItem={({item}) => <Component {...item}/>}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
            />

        </View>

    )
}


export default Scroller