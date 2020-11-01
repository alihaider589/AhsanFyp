import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,Button } from 'react-native'

export default class ForgetPassword extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <TextInput> Enter your email </TextInput>
            <Button title = "Submit" />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});