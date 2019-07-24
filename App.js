import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image, TouchableHighlight } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const CardHeader = () => {
  return (
    <View style={styles.cardHeader}>
      <View style={styles.cardHeaderInfoWrapper}>
        <Image
          style={styles.cardAvatar}
          source={{
            uri: 'https://instagram.fsaw1-2.fna.fbcdn.net/vp/7c588dff7a14c84376bda957caa82ed6/5DC227E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=instagram.fsaw1-2.fna.fbcdn.net'
          }}
        />
        <Text style={styles.cardNick}>
          natgeo
        </Text>
      </View>
      <Entypo name="dots-three-vertical" />
    </View>
  )
}

const CardFooter = () => {
  return (
    <View style={styles.cardFooter}>
      <View style={styles.cardFooterLeftButtons}>
        <TouchableHighlight style={styles.cardFooterButton}>
          <FontAwesome style={styles.cardFooterIcon} name="heart-o" size={24} />
        </TouchableHighlight>

        <TouchableHighlight style={styles.cardFooterButton}>
          <FontAwesome style={styles.cardFooterIcon} name="comment-o" size={24} />
        </TouchableHighlight>

        <TouchableHighlight style={styles.cardFooterButton}>
          <FontAwesome style={styles.cardFooterIcon} name="paper-plane-o" size={24} />
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.cardFooterButton}>
          <FontAwesome style={styles.cardFooterIcon} name="bookmark-o" size={24} />
        </TouchableHighlight>
    </View>
  )
}

const CardContent = () => {
  return (
    <View style={styles.cardContent}>
      <Image
          resizeMode="stretch"
        source={{
          uri: "http://www.wikizero.biz/index.php?q=aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzVlL0NlbHN1c19saWJyYXJ5XzMuSlBH"
        }}
        style={styles.cardImage}
      />
    </View>
  )
}

const Card = () => {
  return (
    <View style={styles.card}>
      <CardHeader />
      <CardContent />
      <CardFooter />
    </View>
  )
}

export default function App() {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <Card />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    alignSelf: 'stretch',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 60,
    paddingLeft: 16,
    paddingRight: 16
  },
  cardHeaderInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAvatar: {
    width: 32,
    height: 32,
    backgroundColor: 'black',
    borderRadius: 16,
    borderColor: 'lightgray',
    borderWidth: .5,
  },
  cardNick: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cardContent: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: 'blue'
  },
  cardImage: {
    flexGrow: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 40,
    paddingLeft: 16,
    paddingRight: 16
  },
  cardFooterButton: {
    width: 40,
    height: 40
  },
  cardFooterLeftButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterIcon: {
    
  }
});
