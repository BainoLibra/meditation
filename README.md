# Meditation App

A cross-platform meditation and mindfulness application built with **React Native**, **Expo**, and **TypeScript**.

## Features

- **Guided Meditations**: Browse and play meditation sessions for stress relief, sleep, focus, and more.
- **Breathing Exercises**: Interactive breathing tools to help you relax.
- **Journaling**: Track your thoughts and progress.
- **Profile**: Manage your streak and preferences.
- **Offline Support**: Core features work without an internet connection.

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (SDK 50+) & React Native
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction) (File-based routing)
- **Styling**: Native StyleSheet & Themed Components
- **Animations**: React Native Reanimated
- **Audio**: Expo Audio / AV

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **Git**
- **Android Studio** (for Android emulator/development)
- **Xcode** (for iOS simulator/development - Mac only)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd meditation
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

This project uses native modules (Reanimated, Expo Audio), so it requires a **Development Build** rather than the standard Expo Go client.

#### Android

1.  Start the development server and build the Android app:
    ```bash
    npx expo run:android
    ```
    *Note: This will compile the native code and install the app on your connected device or emulator. It may take a few minutes the first time.*

#### iOS

1.  Start the development server and build the iOS app (Mac only):
    ```bash
    npx expo run:ios
    ```

### Troubleshooting

- **App stuck on splash screen?**
  Try restarting the development server with the clear flag:
  ```bash
  npx expo start --clear
  ```

- **"No development build installed" error?**
  Make sure you run `npx expo run:android` or `npx expo run:ios` at least once to install the custom native runtime on your device.

## Project Structure

```
meditation/
├── app/                 # Expo Router file-based navigation (pages)
│   ├── (tabs)/          # Main tab navigation
│   ├── _layout.tsx      # Root layout and providers
│   └── index.tsx        # Redirect logic
├── components/          # Reusable UI components
├── assets/              # Images and icons
├── hooks/               # Custom React hooks
├── data/                # Static data (meditations, categories)
└── constants/           # App constants (colors, layout)
```

## License

MIT
