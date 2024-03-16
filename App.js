import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Viewm,Image ,SafeAreaView} from 'react-native';

export default function App() {
  const handlePress=()=>{
    console.log("Text Clicked")
    console.log(require('./assets/icon.png'));
  }
  return (
    <SafeAreaView style={styles.container}>

        <Text numberOfLines={3} onPress={handlePress}>Helow world Helow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow worldHelow world</Text>
        {/* render a local image */}
        {/* <Image source={require('./assets/icon.png')}/> */}
        {/* network images  */}
        <Image 
        blurRadius={2}
        fadeDuration={1}
        source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
          }}/>
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
