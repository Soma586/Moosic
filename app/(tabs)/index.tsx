import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';
import Scroller from '@/components/Scroller';
import MusicItem from '@/components/MusicItem';
import ArtistItem from '@/components/ArtistItem'
import CategoryItem from '@/components/CategoryItem';
import ColumnList from '@/components/ColumnList'




interface recentProps {

  id : number,
  title : string,
  img : string
}
export default function TabOneScreen() {


  const recentView :recentProps[]= [ 
    {
    id : 1,
    title : "naruto",
    img : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'
  },
  {
    id : 2,
    title : "naruto",
    img : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'
  },
  {
    id : 3,
    title : "naruto",
    img : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'
  },
  {
    id : 4,
    title : "naruto",
    img : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'
  },
  {
    id : 5,
    title : "naruto",
    img : 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg'
  },
]


  const categoryList = [

    {
      label : 'Metal',
    },
    {
      label : 'Rock',
    },
    {
      label : 'Classic',
    },
    {
      label : 'Rap',
    },
    {
      label : 'Jazz',
    },
    
  ]

  return (
    <ScrollView style={styles.container}>
      <Scroller list={recentView}  Component={MusicItem}/>

     <Scroller title={"Followed Artist"} list={recentView} Component={ArtistItem}/>


     {/* <CategoryItem /> */}
     <ColumnList list={categoryList} Component={CategoryItem}/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
});
