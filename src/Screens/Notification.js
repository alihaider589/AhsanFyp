import React, { Component } from 'react'
import { Text, View,SafeAreaView,StatusBar } from 'react-native'

export default class Notification extends Component {
    
    render() {
        return (
            <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>
                <Text> Notification </Text>
            </SafeAreaView>
        )
    }
}

