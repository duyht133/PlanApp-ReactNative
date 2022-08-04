import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

const Services = ({navigation}) => {
  const image = {
    uri: 'https://image.winudf.com/v2/image1/Y29tLkFsRmFqckRldmVsb3Blci5CbHVlLldhbGxwYXBlcl9zY3JlZW5fOV8xNTYwNzIzNzI1XzA1Mw/screen-6.jpg?fakeurl=1&type=.webp',
  };
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          {/* <FontAwesomeIcon style={{color: 'white'}} icon={faAngleLeft} /> */}
          <Text style={{color: 'white', fontSize: 20, paddingLeft: 12}}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.ViewTitle}>

          <Text style={{fontSize: 30, color: 'white'}}>Your Plan</Text>

          <View style={{marginTop: 30,diplay:'flex',alignItems: 'center',justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Plan');
              }}
              style={styles.setPlan}>
              <Text style={{fontSize: 25, color: 'white'}}>Advanture</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Plan');
              }}
               style={styles.setPlan}>
              <Text style={{fontSize: 25, color: 'white'}}>Classic</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Plan');
              }}
               style={styles.setPlan}>
              <Text style={{fontSize: 25, color: 'white'}}>Comic</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Plan');
              }}
               style={styles.setPlan}>
              <Text style={{fontSize: 25, color: 'white'}}>Fantasy</Text>
            </TouchableOpacity>
          </View>

        </View>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'Italic',
    margin: 20,
  },
  setPlan: {
    with: '70%',
    height: '13%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#0244fc',
    marginTop: 20,
    paddingRight:20,
    paddingLeft:20,
  },
});

export default Services;
