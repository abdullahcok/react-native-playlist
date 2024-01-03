import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import music_data from './music-data.json'
import SongCard from './src/components/SongCard/SongCard';

function App() {

  const renderSong = ({item}) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator}></View>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList keyExtractor={item => item.id}
                  data={music_data}
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
