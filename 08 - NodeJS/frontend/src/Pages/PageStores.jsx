import React, { useEffect } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
import StoreCard from '../Components/StoreCard';

export default function PageStores() {
  useEffect(() => {
    console.log('Just opened page ---> STORES');
  }, []);

  return (
    <Canvas>
      <Header title="Nossas Lojas" text="Esperamos vê-lx pessoalmente! :D" />

      <main className="container">
        <section className="row">
          <StoreCard
            image="rio.jpg"
            city="Rio de Janeiro"
            address="Av. Presidente Vargas, 5000"
            floor="10° Andar"
            district="Centro"
            number="(21) 3333-3333"
          />

          <StoreCard
            image="sao.jpg"
            city="São Paulo"
            address="Av. Paulista, 985"
            floor="3° Andar"
            district="Jardins"
            number="(11) 4444-4444"
          />

          <StoreCard
            image="santa.jpg"
            city="Santa Catarina"
            address="Rua Major Ávila, 370"
            floor="3° Andar"
            district="Vila Mariana"
            number="(47) 5555-5555"
          />
        </section>
      </main>
    </Canvas>
  );
}
