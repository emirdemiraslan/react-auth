import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Card, Button, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password} = this.state;

        this.setState({
            error: '',
            loading:true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));

            });
    }

    onLoginFail() {
        this.setState({
           loading: false,
           error: 'Authentication Failed!'
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size={'small'}/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return(
            <View >
                <Card>
                    <CardSection>
                        <Input
                            label={'Email'}
                            placeHolder={'your@email.com'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label={'Password'}
                        placeHolder={'password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        isPassword
                        />
                    </CardSection>

                    <Text style={styles.errorText}>
                        {this.state.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    errorText: {
        fontSize:14,
        alignSelf: 'center',
        color:'red'

    },
    loginContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex:1
    },
    loginCard: {

    }
}
export default LoginForm;