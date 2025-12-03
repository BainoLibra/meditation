import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    FadeIn,
    FadeOut,
    SlideInDown,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

// Keep splash screen visible while we load
SplashScreen.preventAutoHideAsync().catch(() => {});

interface SplashScreenProps {
  onComplete: () => void;
}

export default function AppSplashScreen({ onComplete }: SplashScreenProps) {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0.8);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    // Show splash screen for 2 seconds
    const timer = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 400,
        easing: Easing.out(Easing.ease),
      });
      scale.value = withTiming(1.1, {
        duration: 400,
        easing: Easing.out(Easing.ease),
      });

      // Call completion after animation
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        onComplete();
      }, 400);
    }, 2000);

    return () => clearTimeout(timer);
  }, [opacity, scale, onComplete]);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        {
          opacity: opacity,
        },
      ]}
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(400)}
    >
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      <View style={styles.overlay} />

      <Animated.View style={[styles.content, { entering: SlideInDown }]}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🧘</Text>
        </View>
        <Text style={styles.appName}>Meditation</Text>
        <Text style={styles.tagline}>Find Your Inner Peace</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    alignItems: 'center',
    zIndex: 1,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 80,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
});
