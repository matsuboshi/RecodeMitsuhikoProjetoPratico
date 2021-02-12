import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/stores">Lojas</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
