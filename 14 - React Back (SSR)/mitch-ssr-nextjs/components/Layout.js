import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div style={css.container}>
        <main style={css.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

const css = {
  container: {
    minHeight: 'calc(100vh - 80px - 120px)',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: `linear-gradient(90deg,
      rgba(255, 75, 11, 0.8) 0%,
      rgba(254, 155, 22, 0.8) 100%), url('https://static1.mansionglobal.com/production/media/article-images/39f4fbf63af608f538be1c5696bf7fa9/large_Babcock-Peffer.jpg');`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  main: {
    padding: '1rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '1.25rem',
  },
};
