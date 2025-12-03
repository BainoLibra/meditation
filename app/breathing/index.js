import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function BreathingScreen() {
  const router = useRouter();

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Breathing Screen</Text>
      <Button title="Back Home" onPress={() => router.push('/')} />
    </View>
  );
}
