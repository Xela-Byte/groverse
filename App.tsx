import {useEffect, useState} from 'react';
import {WithSplashScreen} from './src/components/splashScreen/SplashScreen';
import Navigator from './src/utils/navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const appTimeout = setTimeout(() => {
      setIsAppReady(true);
    }, 3500);

    return () => {
      clearTimeout(appTimeout);
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <WithSplashScreen isAppReady={isAppReady}>
        <Navigator />
      </WithSplashScreen>
    </GestureHandlerRootView>
  );
};

export default App;
