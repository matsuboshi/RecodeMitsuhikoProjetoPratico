const Header = ({ page }) => {
  return (
    <div style={style2}>
      <p style={style1}>Você está em: {page}</p>
    </div>
  );
};

export default Header;

const style1 = {
  fontWeight: 'none',
  fontFamily: 'Lobster',
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px 50px',
  background: 'rgba(0,0,0,0.2)',
  borderRadius: '500px',
};

const style2 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
