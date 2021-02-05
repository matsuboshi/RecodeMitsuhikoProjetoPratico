import React from 'react';
import { lazy, Suspense } from 'react';
import Loading from './Loading';
const StoreCard = lazy(() => import('../Components/StoreCard'));

export default function SplittedBodyStores() {
  return (
    <main className="container">
      <section className="row">
        <Suspense fallback={<Loading />}>
          <StoreCard
            image="rio.jpg"
            city="Rio de Janeiro"
            address="Av. Presidente Vargas, 5000"
            floor="10° Andar"
            district="Centro"
            number="(21) 3333-3333"
          />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <StoreCard
            image="sao.jpg"
            city="São Paulo"
            address="Av. Paulista, 985"
            floor="3° Andar"
            district="Jardins"
            number="(11) 4444-4444"
          />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <StoreCard
            image="santa.jpg"
            city="Santa Catarina"
            address="Rua Major Ávila, 370"
            floor="3° Andar"
            district="Vila Mariana"
            number="(47) 5555-5555"
          />
        </Suspense>
      </section>
    </main>
  );
}
