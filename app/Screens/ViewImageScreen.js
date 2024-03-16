import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcone}></View> 
        <View style={styles.DeleteIcone}></View> 
        <Image  resizeMode='contain' style={styles.image} source={require("../images/shoose_1.jpg")}/>
    </View>
  )
}
const styles = StyleSheet.create({
    DeleteIcone:{
        width:50,
        height:50,
        backgroundColor:"#4ecdc4",
        position:"absolute",
        top:40,
        right:30

    },
    closeIcone:{
        width:50,
        height:50,
        backgroundColor:"#fc5c65",
        position:"absolute",
        top:40,
        left:30
    },
    image:{
        width:"100%",
        height:"100%",

    },
    container:{
        backgroundColor:"#000",
        flex:1,
    }
})
export default ViewImageScreen