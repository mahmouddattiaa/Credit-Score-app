import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../app/(tabs)/index';

// Mock the components
jest.mock('@/components/CreditScoreGauge', () => ({
  CreditScoreGauge: () => 'CreditScoreGauge'
}));

jest.mock('@/components/QuickActions', () => ({
  QuickActions: () => 'QuickActions'
}));

jest.mock('@/components/NotificationPopup', () => ({
  NotificationPopup: () => 'NotificationPopup'
}));

jest.mock('@/components/ChatPopup', () => ({
  ChatPopup: () => 'ChatPopup'
}));

describe('HomeScreen', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Check if main elements are present
    expect(getByText('Good Morning!')).toBeTruthy();
  });

  it('displays credit score section', () => {
    const { getByText } = render(<HomeScreen />);
    
    expect(getByText('Your Credit Score')).toBeTruthy();
  });

  it('shows recent activity section', () => {
    const { getByText } = render(<HomeScreen />);
    
    expect(getByText('Recent Activity')).toBeTruthy();
  });

  it('includes quick actions component', () => {
    const { UNSAFE_getByType } = render(<HomeScreen />);
    
    expect(UNSAFE_getByType('QuickActions')).toBeTruthy();
  });
});
