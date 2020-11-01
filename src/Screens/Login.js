import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, } from 'react-native'
import firebase from './Firebaseauth'



export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        Loading: false
    }



    ButtonPressHandler() {
        const { email, password, Loading } = this.state;
        this.setState({ error: '', Loading: true })


        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>console.log('Login Successfull'))
            .then(this.props.navigation.navigate('LoggedIn')).then(() => this.onLoginSuccess.bind(this))
            .catch(() => this.onLoginFailed.bind(this))

    }

    onLoginFailed() {
        this.setState({ error: 'Authentication Failed' })
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            Loading: false
        })
    }

    LoginText = () => {
        this.setState(error=>this.state.error)
    }
    renderRegister() {
        return (
            <View>
                <TouchableOpacity onPress={this.ButtonPressHandler.bind(this)}>
                    <Text>Create User</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight}}>
                <ScrollView>
                    <View style={{ margin: 15 }}>
                        <View>
                            <Text style={{ fontSize: 15, color: 'brown', textAlign: "center" }}>Smart On/Off Campus Students Monitoring Network</Text>
                        </View>

                        <View>

                            <Text style={{ fontSize: 15, color: 'brown', textAlign: "center" }}>This App can Monitor the Activities of Students</Text>

                        </View>
                        <View>
                      
                        <Text style={{ textAlign: "center", fontSize: 50, color: "brown" }}>Login</Text>
                      
                        </View>
                        <View><TextInput 
                        value={this.state.email}

                        onChangeText={email => this.setState({ email })}

                        placeholder={"Enter Your UserName"} style={{
                            alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                            width: 280, alignItems: "center",
                            paddingLeft: 50, margin: 15, borderRadius: 20
                        }}>

                        </TextInput>
                            <TextInput 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}

                            placeholder={"Enter Your password"} style={{
                                alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                width: 280, alignItems: "center",
                                paddingLeft: 50, margin: 15, borderRadius: 20
                            }}>

                            </TextInput>

                        </View>
                        <View>
                            <TouchableOpacity
                            onPress={this.ButtonPressHandler.bind(this)}
                            style={{
                                alignSelf: "center", height: 50, borderColor: 'white', borderWidth: 2,
                                width: 120, alignItems: "center", textAlign: "center",
                                margin: 15, borderRadius: 30, backgroundColor: 'brown'
                            }}
                            >
                                <Text style={{ color: 'white', fontSize: 25, padding: 6 }}>Login</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgetPassword')}
                        >
                            <Text style={{ color: 'brown', textAlign: "center" }}>Forget password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>

                            <Text style={{ color: 'brown', textAlign: "center", fontStyle: 'italic' }}>Dont have an Account?  Create New </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
