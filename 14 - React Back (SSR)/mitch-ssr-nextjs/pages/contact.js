import Meta from '../components/Meta';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

const contact = () => {
  return (
    <div>
      <Meta title="Contato" />
      <Header page="Contato" />

      <div className="d-flex flex-column align-items-center my-4">
        <InfoCard info="+55 11 555-5555" fontAwesomeIcon="fab fa-whatsapp" />

        <InfoCard
          info="contato@fullstackeletro.com"
          fontAwesomeIcon="far fa-envelope"
        />
      </div>
    </div>
  );
};

export default contact;
