
export interface MeditationTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: number; // in seconds
  image: string;
  audio: string; // URL for audio file
  category: MeditationCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export type MeditationCategory = 
  | 'mindfulness'
  | 'sleep'
  | 'anxiety'
  | 'focus'
  | 'stress'
  | 'gratitude';

export const CATEGORIES: Record<MeditationCategory, { name: string; icon: string }> = {
  mindfulness: { name: 'Mindfulness', icon: '🧘‍♂️' },
  sleep: { name: 'Sleep', icon: '🌙' },
  anxiety: { name: 'Anxiety', icon: '🫂' },
  focus: { name: 'Focus', icon: '🎯' },
  stress: { name: 'Stress', icon: '🌿' },
  gratitude: { name: 'Gratitude', icon: '🙏' },
};

export const MEDITATIONS: MeditationTrack[] = [
  {
    id: '1',
    title: 'Deep Breathing',
    subtitle: 'Mindful breath awareness',
    description: 'A gentle introduction to mindful breathing. Perfect for beginners learning to connect with their breath.',
    duration: 300,
    image: 'https://images.unsplash.com/photo-1513162617831-786c1e546ec9?w=800&q=80&auto=format&fit=crop', // Misty forest at dawn
    audio: 'https://assets.mixkit.co/music/preview/mixkit-meditation-river-flow-131.mp3',
    category: 'mindfulness',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Peaceful Sleep',
    subtitle: 'Drift into restful sleep',
    description: 'A calming journey to help you relax and prepare for a peaceful night\'s sleep.',
    duration: 900,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80&auto=format&fit=crop', // Starry night sky
    audio: 'https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3',
    category: 'sleep',
    level: 'beginner'
  },
  {
    id: '3',
    title: 'Anxiety Relief',
    subtitle: 'Find your calm center',
    description: 'Gentle guidance to help reduce anxiety and find a sense of peace and stability.',
    duration: 600,
    image: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=800&q=80&auto=format&fit=crop', // Serene lake reflection
    audio: 'https://assets.mixkit.co/music/preview/mixkit-relaxing-meditation-112.mp3',
    category: 'anxiety',
    level: 'intermediate'
  },
  {
    id: '4',
    title: 'Focus Flow',
    subtitle: 'Enhance concentration',
    description: 'Develop laser-sharp focus and maintain sustained attention for your tasks.',
    duration: 420,
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80&auto=format&fit=crop', // Sunrise through trees
    audio: 'https://assets.mixkit.co/music/preview/mixkit-meditation-zen-127.mp3',
    category: 'focus',
    level: 'intermediate'
  },
  {
    id: '5',
    title: 'Stress Release',
    subtitle: 'Let go of tension',
    description: 'Release physical and mental stress through guided relaxation and mindful awareness.',
    duration: 480,
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=800&q=80&auto=format&fit=crop', // Peaceful waterfall
    audio: 'https://assets.mixkit.co/music/preview/mixkit-meditation-stream-114.mp3',
    category: 'stress',
    level: 'beginner'
  },
  {
    id: '6',
    title: 'Gratitude Practice',
    subtitle: 'Cultivate appreciation',
    description: 'Develop a grateful heart and positive mindset through guided gratitude meditation.',
    duration: 600,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80&auto=format&fit=crop', // Sunset over mountains
    audio: 'https://assets.mixkit.co/music/preview/mixkit-meditation-rising-129.mp3',
    category: 'gratitude',
    level: 'beginner'
  }
];