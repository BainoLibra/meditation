import { Image } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    FadeIn,
    FadeOut,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

SplashScreen.preventAutoHideAsync().catch(() => {});

interface SplashScreenProps {
  onComplete: () => void;
}

export default function AppSplashScreen({ onComplete }: SplashScreenProps) {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0.9);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      // play a short pulse then fade out
      scale.value = withRepeat(withTiming(1, { duration: 700, easing: Easing.out(Easing.ease) }), 1, false);
      opacity.value = withTiming(
        0,
        { duration: 600, easing: Easing.inOut(Easing.ease) },
        async () => {
          await SplashScreen.hideAsync();
          onComplete();
        }
      );
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
      entering={FadeIn.duration(600)}
      exiting={FadeOut.duration(600)}
    >
      {/* Background image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1528353518104-71c0b0a28ee3?auto=format&fit=crop&w=1950&q=80",
        }}
        style={styles.backgroundImage}
        contentFit="cover"
      />

      {/* Soft gradient overlay */}
      <View style={styles.gradientOverlay} />

      {/* Center content */}
      <View style={styles.centerContent}>
        {/* Animated Logo Container using bundled app icon */}
        <AnimatedLogo scale={scale} />

        <Animated.Text entering={FadeIn.delay(300).duration(700)} style={styles.appName}>
          Meditation
        </Animated.Text>

        <Animated.Text entering={FadeIn.delay(500).duration(700)} style={styles.tagline}>
          Breathe • Relax • Transform
        </Animated.Text>
      </View>
    </Animated.View>
  );
}

function AnimatedLogo({ scale }: { scale: Animated.SharedValue<number> }) {
  const animated = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.logoContainer, animated]}>
      <Image
        source={require('../assets/images/icon/app-icon.png')}
        style={styles.logoImage}
        contentFit="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    zIndex: 999,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },

  centerContent: {
    alignItems: "center",
    position: "absolute",
  },

  logo: {
    fontSize: 90,
    textShadowColor: "#fff",
    textShadowRadius: 20,
  },

  appName: {
    marginTop: 15,
    fontSize: 38,
    fontWeight: "700",
    color: "white",
    letterSpacing: 1,
  },

  tagline: {
    marginTop: 6,
    fontSize: 16,
    color: "#e0e0e0",
    fontStyle: "italic",
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  logoImage: {
    width: 88,
    height: 88,
    borderRadius: 18,
  },
});
