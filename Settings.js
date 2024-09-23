import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity} from 'react-native';

const Settings = ({navigation}) => {
  const [force, setForce] = useState(0);

  function goToMainSingle() {
    navigation.navigate("Main Screen", {setting: "single"});
  }

  function goToMainCouple() {
    navigation.navigate("Main Screen", {setting: "couple"});
  }

  function goToMainGroup() {
    navigation.navigate("Main Screen", {setting: "group"});
  }

  return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.words}>Click on the category that best describes your situation to begin.</Text>
          <Text style={styles.words}>Simply click the current suggestion to go to the next suggestion.</Text>
        </View>
        <View style= {styles.row}>
          <TouchableOpacity style={styles.button}
            onPress = {goToMainSingle}>
            <Text style={styles.buttonText}>Alone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress = {goToMainCouple}>
            <Text style={styles.buttonText}>Couple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress = {goToMainGroup}>
            <Text style={styles.buttonText}>Group</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFF0F5',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#0782F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 5,
    width: '20%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  words: {
    fontSize: 24
  },
});

export default Settings