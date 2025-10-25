import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import { useThemeColor } from '../../hooks/use-theme-color';

export default function Breathing() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('ready');
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const startBreathing = () => {
    setIsBreathing(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // Breathing animation cycle
    scale.value = withRepeat(
      withTiming(1.5, { 
        duration: 4000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    scale.value = withTiming(1);
    setCurrentPhase('ready');
  };

  useEffect(() => {
    if (isBreathing) {
      const interval = setInterval(() => {
        setCurrentPhase((prev) => {
          const phases = ['inhale', 'hold', 'exhale', 'rest'];
          const currentIndex = phases.indexOf(prev);
          const nextIndex = (currentIndex + 1) % phases.length;
          return phases[nextIndex];
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }, 4000);
      
      setCurrentPhase('inhale');
      return () => clearInterval(interval);
    }
  }, [isBreathing]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pressable
        onPress={isBreathing ? stopBreathing : startBreathing}
        style={styles.breathingArea}
      >
        <Animated.View style={[styles.circle, animatedStyle, { backgroundColor: tintColor }]} />
        <Text style={[styles.phaseText, { color: textColor }]}>
          {isBreathing 
            ? currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)
            : 'Tap to Start'}
        </Text>
      </Pressable>
      
      <View style={styles.instructionContainer}>
        <Text style={[styles.instructionText, { color: textColor }]}>
          {isBreathing
            ? getInstructions(currentPhase)
            : 'Take a moment to breathe'}
        </Text>
      </View>
    </View>
  );
}

const getInstructions = (phase: string) => {
  switch (phase) {
    case 'inhale':
      return 'Breathe in slowly...';
    case 'hold':
      return 'Hold your breath...';
    case 'exhale':
      return 'Release slowly...';
    case 'rest':
      return 'Rest...';
    default:
      return 'Prepare to begin...';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  breathingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.3,
  },
  phaseText: {
    fontSize: 24,
    fontWeight: '600',
    position: 'absolute',
  },
  instructionContainer: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
