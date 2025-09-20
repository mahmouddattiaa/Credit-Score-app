import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { QuickActions } from '../QuickActions';

describe('QuickActions', () => {
  const mockOnAction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all action buttons', () => {
    const { getByText } = render(<QuickActions onAction={mockOnAction} />);
    
    expect(getByText('Pay Bills')).toBeTruthy();
    expect(getByText('View Report')).toBeTruthy();
    expect(getByText('Get Tips')).toBeTruthy();
    expect(getByText('Contact Support')).toBeTruthy();
  });

  it('calls onAction when buttons are pressed', () => {
    const { getByText } = render(<QuickActions onAction={mockOnAction} />);
    
    fireEvent.press(getByText('Pay Bills'));
    expect(mockOnAction).toHaveBeenCalledWith('pay-bills');

    fireEvent.press(getByText('View Report'));
    expect(mockOnAction).toHaveBeenCalledWith('view-report');

    fireEvent.press(getByText('Get Tips'));
    expect(mockOnAction).toHaveBeenCalledWith('get-tips');

    fireEvent.press(getByText('Contact Support'));
    expect(mockOnAction).toHaveBeenCalledWith('contact-support');
  });

  it('has proper accessibility labels', () => {
    const { getByLabelText } = render(<QuickActions onAction={mockOnAction} />);
    
    expect(getByLabelText('Pay Bills')).toBeTruthy();
    expect(getByLabelText('View Credit Report')).toBeTruthy();
    expect(getByLabelText('Get Credit Tips')).toBeTruthy();
    expect(getByLabelText('Contact Support')).toBeTruthy();
  });
});
