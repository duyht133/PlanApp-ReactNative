import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

const Plan = ({navigation}) => {
  const image = {
    uri: 'https://i.pinimg.com/originals/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg',
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
          <Text style={{fontSize: 30, color: 'white'}}>Write Your Plan</Text>
        </View>
        <TextInput
          style={{
            fontSize:30,
            marginTop: 120,
            borderBottomColor: 'black',
            marginRight: 50,
            marginLeft: 50,
            borderBottomWidth: 3,
          }}></TextInput>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{color: 'black', fontSize: 30, paddingLeft: 12,marginTop:40}}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
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
    paddingRight: 20,
    paddingLeft: 20,
  },
});
export default Plan;
