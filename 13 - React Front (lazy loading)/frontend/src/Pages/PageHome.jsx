import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
const SplittedBodyHome = lazy(() => import('./SplittedBodyHome'));
import Loading from './Loading';

export default function PageHome() {
  useEffect(() => {
    console.log('Just opened page ---> HOME');
  }, []);

  return (
    <Canvas>
      <Header
        title="Seja bem vindx!!!"
        text="Aqui em nossa loja, programadores tem desconto para sua casa!"
      />

      <Suspense fallback={<Loading />}>
        <SplittedBodyHome />
      </Suspense>
    </Canvas>
  );
}
