import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { TextInput} from 'react-native'
import { Text, View } from '@/components/Themed';
import GenreItem from '@/components/GenreItem';
import ColumnList from '@/components/ColumnList';
import DiscoverItem from '@/components/DiscoverItem';
import {Fontisto, FontAwesome6} from '@expo/vector-icons'


export default function TabTwoScreen() {


  const list = [

    {
      label : 'blue lock'
    },
    {
      label : 'blue lock'
    },
    {
      label : 'blue lock'
    },
    {
      label : 'blue lock'
    },
  ]


  return (
    <View style={styles.container}>


      <View>
        <Fontisto style={styles.searchIcon} name='search' size={20} color={"#A7A7A7"}/>
        <FontAwesome6 style={styles.micIcon} size={20} color={"#A7A7A7"} name='microphone'/>
      <TextInput 
      style={styles.input}
      placeholder={"Search"}
      />

      </View>
     

      <ColumnList list={list} Component={GenreItem}/>

      <DiscoverItem/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal : 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input : {

    backgroundColor : '#222222',
    borderRadius : 20,
    paddingLeft : 50,
    paddingVertical : 14
  },
  searchIcon : {
    position : 'absolute',
    left : 14,
    top : 12,
    zIndex : 10,
  },
  micIcon : {
    position : 'absolute',
    zIndex : 10,
    right : 20,
    top : 12
  }
});
