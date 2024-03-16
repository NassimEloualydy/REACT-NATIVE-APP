import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Dimensions , Text, View,useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-web';
export default function App() {
  
  //get the Dimensions of screen
  // console.log(useWindowDimensions())
  return (
    <View style={{
      backgroundColor:"dodgerblue",
      width:"100%",
      height:Dimensions.get('window').width>Dimensions.get('window').height?"50%":"30%"
    }}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      
    </View>
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
