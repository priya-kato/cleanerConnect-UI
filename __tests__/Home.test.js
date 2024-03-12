import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/private/home';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../src/app/store';

it('Home screen renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('should handle click event', () => {
  // Render your component
  let isChecked = true;
  const setState = jest.fn().mockImplementation(value => {
    isChecked = value;
  });
  const {getAllByTestId} = render(<HomeScreen setState={setState} />);

  // Find all elements with the testID
  const button = getAllByTestId('list-click');

  // Select the first element

  // Simulate a click event
  button.forEach(button => {
    fireEvent.press(button);
  });
  console.log(isChecked, 'isChecked');
  // Perform your assertions
  expect(isChecked).toBe(true);
});

it('Home screen renders correctly', () => {
  const {getByText} = render(<HomeScreen />);
  expect(getByText('Welcome back')).toBeDefined();
});

it('should navigate to CleanService screen on button press', () => {
  // Mock the navigate function
  const navigate = jest.fn();

  // Render the component within a NavigationContainer
  const {getAllByTestId} = render(
    <Provider store={store}>
      <NavigationContainer>
        <HomeScreen navigation={{navigate}} />
      </NavigationContainer>
    </Provider>,
  );

  // Find the button by its testID
  const button = getAllByTestId('home-click-button');

  button.forEach(button => {
    fireEvent.press(button);
  });

  navigate('CleanService');

  // Assert that the navigate function was called with the correct screen name
  expect(navigate).toHaveBeenCalledWith('CleanService');
});
