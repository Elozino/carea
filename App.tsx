import {Canvas} from '@react-three/fiber/native';
import {OnBoardingScreen} from './src/components';
import React, {Suspense} from 'react';
import OnBoardingModel from './src/components/3DModels/OnboardingModel';
import {Text, View} from 'react-native';
import Model from './src/components/3DModels/Model';
import {Porsche} from './src/components/3DModels/Porsche';
import useControls from 'r3f-native-orbitcontrols';

function App(): React.JSX.Element {
  const [OrbitControls, events] = useControls();
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      {/* <OnBoardingScreen /> */}
      <Text>Hi</Text>
      <View style={{flex: 1}} {...events}>
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          {/* <directionalLight position={[0, 0, -1]} args={['white', 5]} /> */}
          <Suspense fallback={null}>
            {/* <Model /> */}
            {/* <OnBoardingModel /> */}
            <Porsche />
          </Suspense>
        </Canvas>
      </View>
    </View>
  );
}

export default App;
