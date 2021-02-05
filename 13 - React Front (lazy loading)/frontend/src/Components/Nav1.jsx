import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Nav1.css';

function BaseMenu(props) {
  const { location } = props;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ background: '#3D215B' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="/">
          <img
            src={require(`../img/logo.png`).default}
            height="20"
            className="d-inline-block align-top"
            alt="Logo FullStack"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location.pathname}>
            <Nav.Link
              as={Link}
              to="/products"
              href="/products"
              className={styles.link}
            >
              Produtos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/stores"
              href="/stores"
              className={styles.link}
            >
              Lojas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              href="/contact"
              className={styles.link}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Nav1 = withRouter(BaseMenu);

export default Nav1;

const styles = {
  link: 'mx-2 my-1 px-2 py-1 lead text-white',
};
