import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
import Navigation from './src/navigations';
import {COLORS} from './src/components/assets/color';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: COLORS.primary}}>
          <Navigation />
        </View>
      </Provider>
    </QueryClientProvider>
  );
}
