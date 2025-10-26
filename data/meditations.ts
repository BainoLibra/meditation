
export interface MeditationTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: number; // in seconds
  image: string;
  audio: string;
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
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://raw.githubusercontent.com/BainOLibra/meditation-app-resources/main/sounds/rain.mp3',
    category: 'mindfulness',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Peaceful Sleep',
    subtitle: 'Drift into restful sleep',
    description: 'A calming journey to help you relax and prepare for a peaceful night\'s sleep.',
    duration: 900,
    image: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    category: 'sleep',
    level: 'beginner'
  },
  {
    id: '3',
    title: 'Anxiety Relief',
    subtitle: 'Find your calm center',
    description: 'Gentle guidance to help reduce anxiety and find a sense of peace and stability.',
    duration: 600,
    image: 'https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    category: 'anxiety',
    level: 'intermediate'
  },
  {
    id: '4',
    title: 'Focus Flow',
    subtitle: 'Enhance concentration',
    description: 'Develop laser-sharp focus and maintain sustained attention for your tasks.',
    duration: 420,
    image: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    category: 'focus',
    level: 'intermediate'
  },
  {
    id: '5',
    title: 'Stress Release',
    subtitle: 'Let go of tension',
    description: 'Release physical and mental stress through guided relaxation and mindful awareness.',
    duration: 480,
    image: 'https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    category: 'stress',
    level: 'beginner'
  },
  {
    id: '6',
    title: 'Gratitude Practice',
    subtitle: 'Cultivate appreciation',
    description: 'Develop a grateful heart and positive mindset through guided gratitude meditation.',
    duration: 600,
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    category: 'gratitude',
    level: 'beginner'
  }
];