import React, { Component } from 'react'
import { Text, View ,ScrollView,SafeAreaView,StatusBar,TouchableOpacity} from 'react-native'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>
            <ScrollView>
            <View style={{ margin: 15 }}>
            
              <View>
                <Text style={{ textAlign: "center" }}>Smart On/OFf Campus Students Monitoring Network</Text>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
              <Text style={{ textAlign: "left",margin:30, fontSize:20}} >Login</Text>
              </TouchableOpacity>
              <View>
              
              
              </View>
              <Text style={{ textAlign: "center" }}>This App can Monitor the Activities of Students</Text>
              <View>
                <Text style={{ textAlign: "center", fontSize: 50, color: "brown" }}>Welcome</Text>
              </View>
              <View>
        
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notification')}>
              <Text style={{ textAlign :"center", fontSize: 30, color:"brown", marginTop: 10 }} >  Notifications</Text>
              </TouchableOpacity>
      
            </View>
            
          </ScrollView>
            </SafeAreaView>
        )
    }
}
