import Reac, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import music_data from './music-data.json'
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const [list, setList] = useState(music_data)

  const renderSong = ({item}) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator}></View>
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      return currentTitle.indexOf(searchedText) > -1
    })

    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList keyExtractor={item => item.id}
                  data={list}
                  renderItem={renderSong}
                  ItemSeparatorComponent={renderSeperator}
        />
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  seperator:{
    borderWidth: 0.8,
    borderColor: '#eceff1'
  }
});

export default App
