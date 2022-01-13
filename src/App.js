import './App.css';
import SimpleBottomNavigation from './Components/BottomNav/BottomNav';
import Header from './Components/TopNav/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Shows from './Pages/Shows/Shows';
import Search from './Pages/Search/Search';



function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Container>
            <Switch>
              <Route path='/' exact component={Trending} />
              <Route path='/movies' component={Movies} />
              <Route path='/shows' component={Shows} />
              <Route path='/search' component={Search} />
            </Switch>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </Router>
    </>
  );
}

export default App;
