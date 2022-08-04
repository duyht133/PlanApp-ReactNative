import React, {useState, useEffect} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';

const Store = ({navigation}) => {
  const handleClick = () => {
    console.log('haha');
  };
  const Items = [
    {
      key: 1,
      item: '25$ FOR SET PLAN 1',
    },
    {
      key: 2,
      item: '35$ FOR SET PLAN 2',
    },
    {
      key: 3,
      item: '45$ FOR SET PLAN 2',
    },
    {
      key: 4,
      item: '55$ FOR SET PLAN 2',
    },
    {
      key: 5,
      item: '65$ FOR SET PLAN 2',
    },
    {
      key: 6,
      item: '100$ FOR 1 WEEK USING FULL PLAN',
    },
    {
      key: 7,
      item: '200$ FOR 1 MONTH USING FULL PLAN',
    },
  ];
  const image = {uri: 'https://image.winudf.com/v2/image1/Y29tLkFsRmFqckRldmVsb3Blci5CbHVlLldhbGxwYXBlcl9zY3JlZW5fOV8xNTYwNzIzNzI1XzA1Mw/screen-6.jpg?fakeurl=1&type=.webp'};
  return (
    <View style={styles.body}>
      <ImageBackground source={image} resizeMode="cover" style={{height: '100%', width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          {/* <FontAwesomeIcon style={{color: 'white'}} icon={faAngleLeft} /> */}
          <Text style={{color: 'white',fontSize:20,paddingLeft:12}}>Back</Text>
        </TouchableOpacity>

        <View style={styles.ViewTitle}>
          <Text style={{fontSize: 30, color: 'white'}}>Store</Text>
        </View>

        {Items.map(i => {
          return (
            <View style={styles.text} key={i.key}>
              <Button
                style={styles.button}
                title={i.item}
                onPress={handleClick}
              />
            </View>
          );
        })}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
  },
  ViewTitle: {
    fontSize: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'Italic',
    margin: 20,
  },
});

export default Store;
