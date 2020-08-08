import React from 'react';

import {StatusBar} from 'react-native';
import AppStack from './src/routes/AppStack';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <AppStack />
      <StatusBar barStyle="light-content" backgroundColor="#8257E5" />
    </>
  );
};

export default App;
