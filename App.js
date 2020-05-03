import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFont = () => {
  Font.loadAsync({
    'Josh':require('./assets/fonts/Jost-Regular.ttf'),
    'josh-bold':require('./assets/fonts/Jost-Bold.ttf')
  })
};

export default function App() {

  const [fontLoad,setFontLoad] = useState(false);
  
  if(!fontLoad)
  {
    return <AppLoading startAsync={fetchFont} onFinish={()=>setFontLoad(true)} />;
  }

  return (
    <View style={styles.container}>
      <Text>Meals App is getting started</Text>
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
