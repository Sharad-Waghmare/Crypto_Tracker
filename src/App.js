import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import HomePages from './page/HomePages';
import CoinPage from './page/CoinPage';
import { makeStyles } from '@material-ui/core';
import Alert from './components/Banner/Alert';
import CoinsTable from './components/CoinsTable';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.App}>
      <Router>
        <HeaderComp/>
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/coins' element={<CoinsTable/>}/>
          <Route path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
      </Router>
      <Alert/>
    </div>
    </>
  );
}

export default App;
