import React, { Component } from 'react'
import { Text, View ,Button,StyleSheet,TouchableOpacity} from 'react-native'

export default class SentMail extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <Text> Reset password email sent. </Text>
            <TouchableOpacity >
            <Text>
            Click to Login
            </Text>
            </TouchableOpacity>
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