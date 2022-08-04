import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  const image = {
    uri: 'https://i.pinimg.com/originals/f5/af/38/f5af38611cd1bda1f68876a13bb6436e.jpg',
  };

  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={image}
      resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{display: 'flex',alignItems: 'center',paddingTop:40}}>
          <Text style={{fontSize:30,color: 'white',fontFamily:'bold'}}>PLAN FUTURE</Text>
        </View>
        <View
          style={{
            with: '100%',
            height: '30%',
            marginTop: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Services');
            }}
            style={{
              with: '60%',
              height: '15%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#0244fc',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                marginRight: 30,
                marginLeft: 30,
              }}>
              Your Plan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Store');
            }}
            style={{
              marginTop: 20,
              with: '60%',
              height: '15%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#0244fc',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                marginRight: 30,
                marginLeft: 30,
              }}>
              Store
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
