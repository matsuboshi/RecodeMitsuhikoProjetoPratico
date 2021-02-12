import headerStyles from '../styles/Header.module.css';
import Meta from '../components/Meta';
import Header from '../components/Header';

const index = () => {
  return (
    <div>
      <Meta title="Home" />
      <Header page="Home" />
      <div style={{ margin: 'auto', paddingTop: '3rem' }}>
        <h1 className={headerStyles.title}>
          Seja<span>bem</span>vindo
        </h1>
        <p className={headerStyles.description}>
          Aqui programadores têm desconto!
        </p>
      </div>
    </div>
  );
};

export default index;
