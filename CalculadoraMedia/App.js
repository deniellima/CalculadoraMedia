import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/Main';
import Rodape from './src/components/Rodape';
import Watemark from '/src/components/Watermark'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Rodape/>
      <Watemark/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
