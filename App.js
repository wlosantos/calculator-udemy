import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="">
      <View>
        <Text>W3n Mobiles!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

