import { FlatList, View } from 'react-native'
import CategoryItem from './CategoryItem'

const ColumnList = ({list}) => {



    return (
        <View>

            <FlatList
            scrollEnabled={false}
            data={list}
            numColumns={2}
            renderItem={({item}) => <CategoryItem {...item}/>}
            />

            
        </View>

    )

}

export default ColumnList