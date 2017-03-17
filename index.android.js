/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    ScrollView,
    TouchableHighlight,
    AppRegistry,
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {PullView} from 'react-native-pull';

export default class FaceMash extends Component {
    render() {
        return (
            <View style={styles.row}>
              <Image
                  source={require('./img/Jamie.jpg')}
                  style={styles.image}
              />
              <View style={styles.text}>
                <Text style={styles.title}>
                  Jamie Jiang
                </Text>
                <Text style={styles.subtitle}>
                  Always be together with you!I love you!
                </Text>
              </View>
              <TouchableHighlight
                  style={styles.button}
                  onPress={() => {alert("Love Jamie")}}
              >
                <Text style={styles.buttonText}>Love U</Text>
              </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    button: {
      height: 40,
        width: 100,
        borderRadius:10,
        backgroundColor: 'blue',
        justifyContent: "center",
    },
    buttonText:{
        textAlign: 'center',
        color: 'white'
    },
    row: { flexDirection: 'row', margin: 40 },
    image: { width: 40, height: 40, marginRight: 10 },
    text: { flex: 1, justifyContent: 'center'},
    title: { fontSize: 11, fontWeight: 'bold' },
    subtitle: { fontSize: 10 },
});

AppRegistry.registerComponent('FaceMash', () => FaceMash);
