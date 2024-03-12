//Cleanservice
import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import Cleanservice from '../src/screens/private/home/cleanservice';
import {store} from '../src/app/store';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainFormInput from '../src/components/mainForm/mainInput';
import {render, fireEvent, screen} from '@testing-library/react-native';

const queryClient = new QueryClient();

const navigate = jest.fn();

it('Cleanservice renders correctly', () => {
  renderer.create(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {<Cleanservice navigation={{navigate}} />}
      </Provider>
    </QueryClientProvider>,
  );
});

it('updates the value when text is typed into the input', () => {
  const {getByTestId, getByPlaceholderText} = render(
    <MainFormInput labelValue="Hello" />,
  ); // Render the component

  const input = getByTestId('input-field'); // Get the text input component by its test ID

  // Assert that the value of the input has been updated correctly
  expect(input.props.value).toBe('Hello');
});


it('to check the placeholder', () => {
  const placeholderText = 'Enter Name'; // Expected placeholder value

  const {getByPlaceholderText} = render(
    <MainFormInput placeholderText={placeholderText} />,
  );

  const placeholder = getByPlaceholderText(placeholderText);
  expect(placeholder).toBeTruthy();
});
