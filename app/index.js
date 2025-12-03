import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Welcome to Meditation App</Text>
      <Button title="Meditation" onPress={() => router.push('/meditation')} />
      <Button title="Breathing" onPress={() => router.push('/breathing')} />
      <Button title="Journal" onPress={() => router.push('/journal')} />
      <Button title="Profile" onPress={() => router.push('/profile')} />
    </View>
  );
}
