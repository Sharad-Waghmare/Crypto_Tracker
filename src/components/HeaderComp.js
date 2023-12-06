import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import AuthModal from './Authentication/AuthModal';
import { CryptoState } from '../CryptoContext';
import UserSidebar from './Authentication/UserSidebar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});


const HeaderComp = () => {
  const classes = useStyles();
  const { user } = CryptoState();
  return (
    <>
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <Container className={classes.title}>
        <Navbar.Brand to="/" style={{color: 'gold'}}>Crypto Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/coins">Coins</NavLink>
            <NavLink className="nav-link" to=""> {user ? <UserSidebar/> : <AuthModal/>} </NavLink>
          </Nav>
        </Navbar.Collapse>
            
      </Container>
    </Navbar>
          
    </>
  );
}

export default HeaderComp;