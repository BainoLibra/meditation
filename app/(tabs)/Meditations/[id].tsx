import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You opened meditation with ID: {id}</Text>
    </View>
  );
}
