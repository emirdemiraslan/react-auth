import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBFAz8vvpFcLG8qMETiFmXVxQ8vETpVC8I",
            authDomain: "authentication-67e77.firebaseapp.com",
            databaseURL: "https://authentication-67e77.firebaseio.com",
            projectId: "authentication-67e77",
            storageBucket: "authentication-67e77.appspot.com",
            messagingSenderId: "250544412437"
        });

    }

    render() {
        return(
          <View>
              <Header title={'hi'}/>
              <LoginForm />
          </View>
        );
    }
}

export default App;
