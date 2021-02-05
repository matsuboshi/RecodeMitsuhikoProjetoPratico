import { lazy, Suspense } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
const SplittedBodyContact = lazy(() => import('./SplittedBodyContact'));
import Loading from './Loading';

export default function PageContact() {
  return (
    <Canvas>
      <Header
        title="Fale Conosco"
        text="Entre em contato por um de nossos canais de comunicação, ou deixe seu feedback! "
      />

      <Suspense fallback={<Loading />}>
        <SplittedBodyContact />
      </Suspense>
    </Canvas>
  );
}
