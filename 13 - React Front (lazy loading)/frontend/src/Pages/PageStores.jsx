import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
const SplittedBodyStores = lazy(() => import('./SplittedBodyStores'));
import Loading from './Loading';

export default function PageStores() {
  useEffect(() => {
    console.log('Just opened page ---> STORES');
  }, []);

  return (
    <Canvas>
      <Header title="Nossas Lojas" text="Esperamos vê-lx pessoalmente! :D" />

      <Suspense fallback={<Loading />}>
        <SplittedBodyStores />
      </Suspense>
    </Canvas>
  );
}
