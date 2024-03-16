import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Dimensions , Text, View,useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import WelcomeScreen from './app/Screens/WelcomeScreen';
export default function App() {
  
  //get the Dimensions of screen
  // console.log(useWindowDimensions())
  return (
    <WelcomeScreen/>
    // <View 
    // style={{
    //   backgroundColor:"white",
    //   // width:"100%",
    //   // height:Dimensions.get('window').width>Dimensions.get('window').height?"50%":"30%"
    //   flex:1,
    //   flexDirection:"row",
    //   justifyContent:"center",
    //   alignItems:"center"
    // }}
    // >
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   <View
    //    style={{
    //     backgroundColor:"green",

    //     width:100,
    //     height:100,
    //     position:"absolute",
    //     top:10
    //     // height:Dimensions.get('window').width>Dimensions.get('window').height?"50%":"30%"
    //   }}
    //   />
    //   <View
    //    style={{
    //     backgroundColor:"blue",
    //     width:100,
    //     height:100,
    //   }}
    //   />
    //   <View
    //    style={{
    //     backgroundColor:"orange",
    //     width:100,
    //     height:100,
    //   }}
    //   />

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
