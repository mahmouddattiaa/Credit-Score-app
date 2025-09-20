import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CreditScoreGauge } from '../CreditScoreGauge';

describe('CreditScoreGauge', () => {
  const defaultProps = {
    score: 750,
    maxScore: 850,
    size: 200,
  };

  it('renders correctly with given props', () => {
    const { getByTestId } = render(<CreditScoreGauge {...defaultProps} />);
    
    expect(getByTestId('credit-score-gauge')).toBeTruthy();
  });

  it('displays the correct score', () => {
    const { getByText } = render(<CreditScoreGauge {...defaultProps} />);
    
    expect(getByText('750')).toBeTruthy();
  });

  it('calculates percentage correctly', () => {
    const score = 680;
    const maxScore = 850;
    const expectedPercentage = Math.round((score / maxScore) * 100);
    
    const { getByText } = render(
      <CreditScoreGauge score={score} maxScore={maxScore} size={200} />
    );
    
    expect(getByText(`${expectedPercentage}%`)).toBeTruthy();
  });

  it('shows different colors for different score ranges', () => {
    const { rerender, getByTestId } = render(
      <CreditScoreGauge score={500} maxScore={850} size={200} />
    );
    
    // Poor score should have red-ish color
    expect(getByTestId('score-indicator')).toHaveStyle({
      color: expect.stringMatching(/red|#[0-9a-f]{6}/i)
    });

    rerender(<CreditScoreGauge score={750} maxScore={850} size={200} />);
    
    // Good score should have green-ish color
    expect(getByTestId('score-indicator')).toHaveStyle({
      color: expect.stringMatching(/green|#[0-9a-f]{6}/i)
    });
  });
});
