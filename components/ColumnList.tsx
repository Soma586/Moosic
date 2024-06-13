import { FlatList, View } from 'react-native'
import CategoryItem from './CategoryItem'

const ColumnList = ({list, Component}) => {



    return (
        <View>

            <FlatList
            style={{width : '100%'}}
            scrollEnabled={false}
            data={list}
            numColumns={2}
            renderItem={({item}) => <Component {...item}/>}
            />

            
        </View>

    )

}

export default ColumnList