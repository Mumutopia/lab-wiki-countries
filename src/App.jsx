import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <NavBar />
      <main>
       

        <Switch>
          {/* <Route exact path="/country" components={CountriesList}>
        
      </Route> */}
          <Route path="/country/:cioc" component={CountryDetails} />
        </Switch>
        <div>
          <CountriesList />
        </div>
      </main>
    </>
  );
}

export default App;
