import Meta from '../components/Meta';
import Header from '../components/Header';
import StoreCard from '../components/StoreCard';

const stores = () => {
  return (
    <div>
      <Meta title="Lojas" />
      <Header page="Lojas" />
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
    </div>
  );
};

export default stores;
