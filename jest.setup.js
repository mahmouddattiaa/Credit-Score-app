import 'react-native-gesture-handler/jestSetup';

// Mock Expo modules
jest.mock('expo-constants', () => ({
  manifest: {},
}));

jest.mock('expo-font');
jest.mock('expo-asset');

// Mock Expo Router
jest.mock('expo-router', () => ({
  Link: 'Link',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}));

// Mock React Native modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Global test setup
global.__DEV__ = true;

// Silence the warning about reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock async storage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
