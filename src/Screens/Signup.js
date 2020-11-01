import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import firebase from './Firebaseauth'
export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        Loading: false
    }



    ButtonPressHandler() {
        const { email, password, Loading } = this.state;
        this.setState({ error: '', Loading: true })


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess.bind(this))
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
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>

                <ScrollView>
                    <View style={{ margin: 15 }}>
                        <View>
                            <Text style={{ fontSize: 15, color: 'brown', textAlign: "center" }}>Smart On/Off Campus Students Monitoring Network</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, color: 'brown', textAlign: "center" }}>This App can Monitor the Activities of Students</Text>

                        </View>
                        <View>
                            <TouchableOpacity
                         
                             
                            >
                                <Text style={{ textAlign: "center", fontSize: 35, color: "brown" }}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput placeholder={"Enter Your Name"} style={{
                                alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                width: 280, alignItems: "center",
                                paddingLeft: 50, margin: 10, borderRadius: 20
                            }}>



                            </TextInput>
                            <TextInput
                                value={this.state.email}

                                onChangeText={email => this.setState({ email })}

                                placeholder={"Enter Your Email"} style={{
                                    alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                    width: 280, alignItems: "center",
                                    paddingLeft: 50, margin: 10, borderRadius: 20
                                }}>

                            </TextInput>
                            <TextInput placeholder={"Enter Your Student ID"} style={{
                                alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                width: 280, alignItems: "center",
                                paddingLeft: 50, margin: 10, borderRadius: 20
                            }}>

                            </TextInput>
                            <TextInput

                                placeholder={"Enter Your password"}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}

                                style={{
                                    alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                    width: 280, alignItems: "center",
                                    paddingLeft: 50, margin: 10, borderRadius: 20
                                }}>

                            </TextInput>

                            <TextInput placeholder={"Confirm Your password"} style={{
                                alignSelf: "center", height: 50, borderColor: 'black', borderWidth: 2,
                                width: 280, alignItems: "center",
                                paddingLeft: 50, margin: 10, borderRadius: 20
                            }}>
                            </TextInput>


                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={this.ButtonPressHandler.bind(this)}
                                style={{
                                    alignSelf: "center", height: 50, borderColor: 'white', borderWidth: 2,
                                    width: 220, alignItems: "center", textAlign: "center",
                                    margin: 15, borderRadius: 30, backgroundColor: 'brown'
                                }}>
                                <Text style={{ color: 'white', fontSize: 25, padding: 6 }}>Create Account</Text>

                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: 'brown', textAlign: "center" }} >Already have an Account? Login</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
