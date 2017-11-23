import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import {Card} from "./src/components/common/Card";
import {CardSection} from "./src/components/common/CardSection";
import {Spinner} from "./src/components/common/Spinner";


class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBFAz8vvpFcLG8qMETiFmXVxQ8vETpVC8I",
            authDomain: "authentication-67e77.firebaseapp.com",
            databaseURL: "https://authentication-67e77.firebaseio.com",
            projectId: "authentication-67e77",
            storageBucket: "authentication-67e77.appspot.com",
            messagingSenderId: "250544412437"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });

    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>

                );
            case false:
                return <LoginForm/>;

            case null:
                return <Spinner/>;
        }


    }

    render() {
        return(
          <View >
              <Header title={'AUTH'}/>
              {this.renderContent()}
          </View>
        );
    }
}

export default App;
