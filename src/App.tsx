import React from 'react';
import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './providers';
import { useScreens } from 'react-native-screens';

useScreens();

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
