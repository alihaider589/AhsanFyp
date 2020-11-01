import React, { Component } from 'react'
import { Text, View,SafeAreaView,StatusBar } from 'react-native'

export default class Loggedin extends Component {
    
    render() {
        return (
            <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>
                <Text> Logged in successfull </Text>
            </SafeAreaView>
        )
    }
}

