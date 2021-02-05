import { lazy, Suspense } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
const SplittedBodyProducts = lazy(() => import('./SplittedBodyProducts'));
import Loading from './Loading';

export default function PageProducts() {
  return (
    <Canvas>
      <Header
        title="Nossos Produtos"
        text="Confira nossas promoções e economize um montão! "
      />

      <Suspense fallback={<Loading />}>
        <SplittedBodyProducts />
      </Suspense>
    </Canvas>
  );
}
