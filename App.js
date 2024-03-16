import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableNativeFeedback,Alert,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Text, Viewm,Image ,SafeAreaView, Button} from 'react-native';
import { View } from 'react-native-web';

export default function App() {
  const handlePress=()=>{
    console.log("Text Clicked")
    console.log(require('./assets/icon.png'));
  }
  return (
    <SafeAreaView style={styles.container}>

        {/* <Text numberOfLines={3} onPress={handlePress}>Helow world Helow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow world</Text> */}
        {/* render a local image */}
        {/* <Image source={require('./assets/icon.png')}/> */}
        {/* network images  */}
        {/* <TouchableNativeFeedback onPress={()=>{console.log("Image Taped")}}>
          <Image 
            blurRadius={2}
            fadeDuration={1}
            source={{
              width:200,
              height:300,
              uri:"https://picsum.photos/200/300"
            }}/>
        </TouchableNativeFeedback> */}
        <Button title="Click Me" 
        onPress={()=>{
          //Alert.alert function
        //   Alert.alert("My Title","My message",[
        //   {
        //     text:"Yes",
        //     onPress:()=>{console.log("Yes")}
        //   },
        //   {
        //     text:"No",
        //     onPress:()=>{console.log("No")}
 
        //   }
        // ])
        //Alert.prompt function not working on android 
        // Alert.prompt("My Ttitle","My Message",text=>console.log(text))

      
      }}
        
        />
    </SafeAreaView>
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
